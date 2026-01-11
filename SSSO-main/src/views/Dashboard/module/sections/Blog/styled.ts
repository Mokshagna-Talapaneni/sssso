import { styled } from "@mui/material";
import { pxToRem } from "@utils/styles";
import { NonMuiColors } from "@constants/COLORS";

export const BlogContainer = styled("div")(({ theme }) => ({
  position: "relative",
  padding: pxToRem(48),
  display: "flex",
  flexDirection: "column",
  gap: pxToRem(24),
  background: theme.palette.background.paper,
}));

export const BlogGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
  gap: pxToRem(24),
  marginTop: pxToRem(16),
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const BlogCard = styled("div")(({ theme }) => ({
  padding: pxToRem(24),
  backgroundColor: NonMuiColors.WHITE,
  border: `1px solid ${theme.palette.divider}`,
  borderTop: `${pxToRem(6)} solid ${theme.palette.primary.main}`, // Matching the blue top border style
  borderRadius: pxToRem(8),
  display: "flex",
  flexDirection: "column",
  gap: pxToRem(16),
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
  },
  "& .preview-text": {
    color: NonMuiColors.BLACK,
    opacity: 0.8,
    lineHeight: 1.6,
  },
}));