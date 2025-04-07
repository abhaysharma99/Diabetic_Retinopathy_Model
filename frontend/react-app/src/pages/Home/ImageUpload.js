import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Avatar, Container, Card, CardContent, CardActionArea, CardMedia, Grid, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Button, CircularProgress, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { useDropzone } from "react-dropzone";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";
import cblogo from "./cblogo.PNG";
import bgImage from "./bg.png";

const ColorButton = styled(Button)({
  color: "#000",
  backgroundColor: "#fff",
  '&:hover': {
    backgroundColor: '#ffffff7a',
  },
});

export const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [data, setData] = useState(null);
  const [image, setImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let confidence = 0;

  const sendFile = async () => {
    if (image) {
      let formData = new FormData();
      formData.append("file", selectedFile);
      try {
        let res = await axios.post("http://localhost:8000/predict", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        if (res.status === 200) {
          setData(res.data);
        }
      } catch (error) {
        console.error("Upload failed", error);
      }
      setIsLoading(false);
    }
  };

  const clearData = () => {
    setData(null);
    setImage(false);
    setSelectedFile(null);
    setPreview(null);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    if (!preview) return;
    setIsLoading(true);
    sendFile();
  }, [preview]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (files) => {
      if (files.length === 0) return;
      setSelectedFile(files[0]);
      setImage(true);
      setData(null);
    },
  });

  if (data) {
    confidence = (parseFloat(data.confidence) * 100).toFixed(2);
  }

  return (
    <>
      <AppBar position="static" sx={{ background: "#be6a77", boxShadow: "none", color: "white" }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Diabetic Retinopathy Detection
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <Avatar src={cblogo} />
        </Toolbar>
      </AppBar>
      <Container maxWidth={false} sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: "93vh",
        marginTop: "8px",
      }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ padding: "4em 1em 0 1em" }}>
          <Grid item xs={12}>
            <Card sx={{
              margin: "auto",
              maxWidth: 400,
              height: 500,
              backgroundColor: "transparent",
              boxShadow: "0px 9px 70px rgba(0, 0, 0, 0.3)",
              borderRadius: "15px",
            }}>
              {image && (
                <CardActionArea>
                  <CardMedia
                    sx={{ height: 400 }}
                    image={preview}
                    component="img"
                    title="Uploaded Retina Image"
                  />
                </CardActionArea>
              )}
              {!image && (
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
                  <div {...getRootProps()} style={{ border: "2px dashed #aaa", padding: "20px", textAlign: "center", width: "100%", cursor: "pointer" }}>
                    <input {...getInputProps()} />
                    <Typography>Drag and drop an image of a Retina to process</Typography>
                  </div>
                </CardContent>
              )}
              {data && (
                <CardContent sx={{ backgroundColor: "white", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <TableContainer component={Paper} sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Label:</TableCell>
                          <TableCell align="right">Confidence:</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>{data.class}</TableCell>
                          <TableCell align="right">{confidence}%</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              )}
              {isLoading && (
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <CircularProgress sx={{ color: "#be6a77" }} />
                  <Typography variant="h6">Processing</Typography>
                </CardContent>
              )}
            </Card>
          </Grid>
          {data && (
            <Grid item sx={{ maxWidth: "416px", width: "100%" }}>
              <ColorButton variant="contained" size="large" fullWidth onClick={clearData} startIcon={<ClearIcon fontSize="large" />}>
                Clear
              </ColorButton>
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
};
