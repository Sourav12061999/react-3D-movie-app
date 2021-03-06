import React, { useState } from "react";
import Box from "@mui/material/Box";
import { FaPlay } from "react-icons/fa";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
interface MoviedetailsInterface {
  title: string;
  image: string;
  rating: number;
  rateCount: number;
  about: string;
  homepage: string;
}
interface Props {
  details: MoviedetailsInterface;
}
function Details(props: Props) {
  const { details } = props;
  return (
    <Box sx={{ width: "50%", height: "500px" }}>
      <Box sx={{ width: "90%", margin: "auto", marginTop: "20px" }}>
        <Typography variant="h3" gutterBottom color={"white"}>
          {details?.title}
        </Typography>
        <Typography sx={{ color: "white" }} gutterBottom>
          {details?.about}
        </Typography>
        <Box sx={{ display: "flex", marginTop: "15px" }}>
          <Rating
            name="size-large"
            value={!details ? 0 : details.rating}
            readOnly
            precision={0.5}
            size="large"
          />
          <Typography
            sx={{
              display: "block",
              color: "white",
              marginLeft: "5px",
              marginTop: "4px",
            }}
          >
            {details?.rateCount}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Details;
