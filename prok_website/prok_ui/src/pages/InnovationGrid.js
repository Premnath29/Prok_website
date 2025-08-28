import React from "react";
import { Grid, Box } from "@mui/material";
import InnovationCard from "./InnovationCard";
import img1 from "../assets/prok1.jpg";
import img2 from "../assets/prok2.jpeg";
import img3 from "../assets/prok3.jpg";

export default function InnovationGrid() {
  const cards = [
    { image: img1, title: "Title 1", date: "26 August, 2025", tags: ["Article", "News"] },
    { image: img2, title: "Title 2", date: "21 August, 2025", tags: ["Article", "News"] },
    { image: img3, title: "Title 3", date: "11 August, 2025", tags: ["Article", "News"] },
    { image: img1, title: "Title 4", date: "26 August, 2025", tags: ["Article", "News"] },
    { image: img2, title: "Title 5", date: "21 August, 2025", tags: ["Article", "News"] },
    { image: img3, title: "Title 6", date: "11 August, 2025", tags: ["Article", "News"] },
    { image: img1, title: "Title 4", date: "26 August, 2025", tags: ["Article", "News"] },
    { image: img2, title: "Title 5", date: "21 August, 2025", tags: ["Article", "News"] },
    { image: img3, title: "Title 6", date: "11 August, 2025", tags: ["Article", "News"] },
  ];

  return (
    <Box sx={{ flexGrow: 1, px: 2, py: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {cards.map((card, idx) => (
          <Grid
            item
            key={idx}
            xs={12}   
            sm={6}    
            md={4}    
            display="flex"
            justifyContent="center"
          >
            <InnovationCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
