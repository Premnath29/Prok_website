import React from "react";
import { Card, CardMedia, CardContent, Typography, Box, Chip } from "@mui/material";
import { motion } from "framer-motion";

export default function InnovationCard({ image, title, date, tags }) {
  return (
    <motion.div
      whileHover="hover"
      transition={{ duration: 0.5, ease: "backInOut" }}
      variants={{ hover: { scale: 1.05 } }}
      style={{ display: "inline-block" }}
    >
      <Card
        className="innovation-card"
        sx={{ width: 315, minHeight: 350, position: "relative", overflow: "hidden" }}
      >
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={title}
          className="innovation-card-img"
        />

        <Box
          className="card-tags"
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            display: "flex",
            gap: 1,
          }}
        >
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              sx={{ backgroundColor: "rgba(255,255,255,0.8)", color: "black", fontWeight: 300 }}
            />
          ))}
        </Box>

        <CardContent sx={{ padding: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#bbb" }}>
            {date}
          </Typography>
        </CardContent>

        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            background: "#262626",
            borderRadius: "12px",
            opacity: 0.05,
          }}
          variants={{
            hover: { scale: 1.1 },
          }}
          transition={{ duration: 0.5, ease: "backInOut" }}
        />
      </Card>
    </motion.div>
  );
}
