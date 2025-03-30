from fastapi import FastAPI , UploadFile , File,HTTPException
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
import keras
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL  = keras.layers.TFSMLayer("/home/rhorschac/jnotebook/diabetic_retinopathy/saved_models/1")
class_names = {0: "No DR", 1: "Mild", 2: "Moderate", 3: "Severe", 4: "Proliferative DR"}
@app.get("/ping")
async def ping():
    return "Hello, I am Alive"

# Replace this function where you process the image before inference
def preprocess_image(image):
    target_size = (128, 128)  # Match your model input size
    image = tf.image.resize(image, target_size)  # Resize to 128x128
    image = tf.image.convert_image_dtype(image, dtype=tf.float32)  # Normalize
    image = tf.expand_dims(image, axis=0)  # Add batch dimension
    return image

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return (image)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image = read_file_as_image(await file.read())

    # Resize image to match model input shape
    image_batch = preprocess_image(image)

    try:
        predictions = MODEL(image_batch)  # Run inference
        predictions = predictions.numpy()  # Convert Tensor to NumPy
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Model error: {str(e)}")

    predicted_index = int(np.argmax(predictions[0]))
    predicted_class = class_names.get(predicted_index, "Unknown Class")
    confidence = float(np.max(predictions[0]))

    return {
        "class": predicted_class,
        "confidence": confidence
    }

if __name__  == "__main__":
    uvicorn.run(app,port=8000,host='localhost')