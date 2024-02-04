import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./envelope.css"; // Import the styles
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const handleEnvelopeClick = () => {
    open();
  };

  const handleOpenClick = () => {
    open();
  };
  const handleOpenClick2 = () => {
    // eslint-disable-next-line no-restricted-globals
    history.push("/about");
  };
  const open = () => {
    setIsOpen(true);
    setIsButtonVisible(false);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <div
      id="envelope"
      className={isOpen ? "open" : "close"}
      onClick={handleEnvelopeClick}
    >
      {/* Your envelope HTML content goes here */}
      <div className="front flap"></div>
      <div className="front pocket"></div>
      <div className="letter">
        <p className="words line1">Dear Rachel,</p>
        <p className="words line2">
          You hv been the &lt;3 of my life these past months
        </p>
        <p className="words line3">and u make me a v happy boi.</p>
      </div>
      <div className="hearts">
        <div className="heart a1"></div>
        <div className="heart a2"></div>
        <div className="heart a3"> </div>
      </div>

      {/* Buttons to open and reset the envelope */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Button
            onClick={handleOpenClick}
            style={{
              opacity: isButtonVisible ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
            sx={{ mt: 5, ml: 12 }}
            size="large"
            color="error"
            variant="contained"
          >
            Open
          </Button>
          <Typography
            style={{
              opacity: isButtonVisible ? 0 : 1,
              transition: "opacity 1s ease-in-out",
            }}
            mt={0}
            variant="h5"
          >
            Will you be my Valentine?
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Link to="/about">
            <Button
              style={{
                opacity: isButtonVisible ? 0 : 1,
                transition: "opacity 1s ease-in-out",
              }}
              sx={{ ml: 3 }}
              size="large"
              color="error"
              variant="contained"
            >
              Yes
            </Button>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/rejection">
            <Button
              onClick={handleOpenClick}
              style={{
                opacity: isButtonVisible ? 0 : 1,
                transition: "opacity 1s ease-in-out",
              }}
              size="large"
              color="error"
              variant="contained"
            >
              No
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Envelope;
