import { Icon, lighten, styled, useTheme } from "@mui/material";
import React from "react";
import { FlexAlignCenter } from "./FlexBox";

const RectangleRoot = styled(FlexAlignCenter)(({ theme, color }) => ({
  opacity: 1,
  "& h5": {
    margin: 0,
    fontWeight: "500",
    color: theme.palette.primary.main,
  },
  background:
    color === "primary"
      ? `rgba(var(--primary), 0.15) !important`
      : color === "green"
      ? "rgba(9, 182, 109, 0.15) !important"
      : color === "green"
      ? `${lighten(theme.palette.secondary.main, 0.85)}`
      : `${lighten(theme.palette.error.main, 0.85)}`,
}));

const RectangleAvatar = ({ icon, textIcon, style }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <RectangleRoot sx={style}>
      {textIcon ? <h5>{textIcon}</h5> : <Icon sx={{ color: primary }}>{icon}</Icon>}
    </RectangleRoot>
  );
};

export default RectangleAvatar;
