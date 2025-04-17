// src/components/common/SectionLoader.jsx
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const SectionLoader = () => (
  <div className="flex justify-center items-center py-12">
    <CircularProgress sx={{ color: "#FDC022" }} />
  </div>
);

export default SectionLoader;