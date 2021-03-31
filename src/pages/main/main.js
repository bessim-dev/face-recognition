import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

export const Main = () => {
  const classes = useStyles();
  const [imgSrc, setImgSrc] = React.useState(null);
  const handleUploadClick = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      setImgSrc(reader.result);
      console.log(reader);
    };
    reader.onloadend = function () {
      if (reader.error) {
        console.log(reader.error.message);
      }
    };
    reader.readAsDataURL(file);
  };
  return (
    <>
      <Grid container spacing={3} alignItems="center" direction="column">
        <Grid container xs={12}>
          <Grid item xs={10} />
          <Button
            variant="outlined"
            color="secondary"
            style={{ marginTop: "40px" }}
          >
            LOG OUT
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} style={{ marginTop: "60px" }}>
          <Typography className={classes.paper} variant="h4">
            Bessim u are number 2
          </Typography>
        </Grid>
        <Grid
          container
          xs={12}
          direction="row"
          justify="center"
          alignItems="center"
          style={{ marginTop: "80px" }}
        >
          <Grid container xs={5} justify="space-evenly" alignItems="center">
            <TextField
              id="standard-basic"
              label="Paste an image url"
              placeholder=".."
              autoFocus
              onChange={(e) => setImgSrc(e.target.value)}
            />
          </Grid>
          <Grid container xs={5} justify="space-around" alignItems="center">
            <input
              style={{ display: "none" }}
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleUploadClick}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="secondary" component="span">
                Upload an image
              </Button>
            </label>
          </Grid>
        </Grid>
        {imgSrc ? (
          <div
            style={{
              width: "30%",
              marginTop: "30px",
              height: "400px",
            }}
          >
            <img src={imgSrc} alt="faces" width="100%" />
          </div>
        ) : null}
      </Grid>
    </>
  );
};
