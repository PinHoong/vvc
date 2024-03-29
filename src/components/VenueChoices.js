import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";

const images = [
  {
    url: "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20201002142956&q=80",
    title: "Japanese",
    width: "33.3%",
  },
  {
    url: "https://www.tastingtable.com/img/gallery/15-ingredients-that-will-seriously-elevate-your-steak/l-intro-1663169111.jpg",
    title: "Western",
    width: "33.3%",
  },
  {
    url: "https://data.thefeedfeed.com/recommended/post_3122095.jpg",
    title: "Korean",
    width: "33.3%",
  },
  {
    url: "https://www.dimsumcentral.com/wp-content/uploads/2018/06/what-is-dim-sum-header-new.jpg",
    title: "Chinese",
    width: "33.3%",
  },
  {
    url: "https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/intro-1702481237.jpg",
    title: "Italian",
    width: "33.3%",
  },
  {
    url: "https://images-cdn.welcomesoftware.com/Zz0zZmEwYTlmODJhZTIxMWVjODdjYWU2ZTYxNWJmMmRjNQ==/Zz0zMTc5YWIwZTBmZmYxMWVjOTBiZDJmOGY5N2ZjYjVhMA%3D%3D.jpg?width=1366",
    title: "Thai",
    width: "33.3%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function ButtonBaseDemo() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [textFieldValue, setTextFieldValue] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleClick = (title) => {
    setSelectedButton(title);
  };

  const handleConfirm = () => {
    setIsSent(true);
    const payload = {
      body: selectedButton ? selectedButton : textFieldValue,
    };

    fetch(
      "https://rg6t6otdnf.execute-api.ap-southeast-1.amazonaws.com/dev/foodChoice",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response:", data);
        // Handle response if needed
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error if needed
      });
  };

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  const handleRefreshChoices = () => {
    setSelectedButton(null);
    setTextFieldValue("");
    setIsSent(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        minWidth: 300,
        width: "100%",
      }}
    >
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          onClick={() => handleClick(image.title)}
        >
          <ImageSrc
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundColor: "white",
            }}
          />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
      <TextField
        fullWidth
        label="Others (Pls Specify thx)"
        id="fullWidth"
        sx={{ mt: 2 }}
        value={textFieldValue}
        onChange={handleTextFieldChange}
      />

      <Stack spacing={2} sx={{ mt: 2 }}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: '"Segoe UI"',
            fontWeight: 600,
            color: "black",
            textDecoration: "none",
            mt: 2,
            mb: 2,
          }}
        >
          Selected Choice: {selectedButton}
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: '"Segoe UI"',
            fontWeight: 600,
            color: "black",
            textDecoration: "none",
            mt: 2,
            mb: 2,
          }}
        >
          Other Choice: {textFieldValue}
        </Typography>
        <Grid container spacing={2}>
          <Button
            variant="contained"
            color="success"
            size="large"
            endIcon={<SendIcon />}
            onClick={handleConfirm}
            disabled={isSent || (!selectedButton && !textFieldValue)}
          >
            {isSent ? "Sent!" : "Confirm"}
          </Button>
          <Button
            sx={{ ml: 2 }}
            variant="contained"
            onClick={handleRefreshChoices}
          >
            Refresh Choices
          </Button>
        </Grid>
      </Stack>
    </Box>
  );
}
