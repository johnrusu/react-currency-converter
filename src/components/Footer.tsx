import React from "react";

// mui
import { Typography } from "@mui/material";

// constants
import { LABELS, appMetadata } from "@/constants";

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-4 w-full">
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} {appMetadata.title}.{" "}
        {LABELS.allRights}
      </Typography>
    </footer>
  );
};

export default Footer;
