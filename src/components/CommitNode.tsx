import { Box } from "@mui/system";
import { Color, ColorSelector, ColorSelectorDark } from "../Theme";
import { Work } from "@mui/icons-material";
import { ReactNode } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export interface CommitNodeProps {
  id?: string;
  link?: string;
  color?: Color;
  isBranch?: boolean;
  image?: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  size?: "sm" | "lg";
}

const CommitNode = ({
  id,
  link,
  color,
  isBranch,
  image,
  Icon,
  size = "sm",
}: CommitNodeProps) => {
  return (
    <Box
      sx={{
        height: size === "sm" ? "150px" : "250px",
        width: "170px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          borderLeft: (theme) =>
            `solid 5px ${
              isBranch
                ? theme.palette.secondary.main
                : theme.palette.primary.dark
            }`,
          height: size === "sm" ? "100%" : "50%",
          position: "absolute",
          left: "50%",
          bottom: 0,
          zIndex: 0,
        }}
      />
      <Box
        className={link && "linkedCommit"}
        sx={{
          width: size === "sm" ? "90px" : "150px",
          height: size === "sm" ? "90px" : "150px",
          backgroundColor: color
            ? ColorSelector(color)
            : (theme) => theme.palette.primary.main,
          borderRadius: "100%",
          border: (theme) =>
            `solid 10px ${
              color ? ColorSelectorDark(color) : theme.palette.primary.dark
            }`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          overflow: "hidden",
          "&:hover": {
            cursor: link && "pointer",
            transform: link && "scale(1.1)",
            transition: link && "transform 0.1s ease-in-out",
          },
        }}
        onClick={() => {
          if (link) {
            window.open(link)?.focus();
          }
        }}
      >
        {Icon && <Icon sx={{ fontSize: 50, fill: "white" }} />}
        {image && (
          <img
            src={image}
            style={{
              width: `${100}%`,
              objectFit: "scale-down",
            }}
            alt=""
          />
        )}
      </Box>
    </Box>
  );
};

export default CommitNode;
