import { Box } from "@mui/system";
import { Color, ColorSelector, ColorSelectorDark } from "../Theme";
import { Work } from "@mui/icons-material";
import { ReactElement, ReactNode } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface CommitNodeProps {
  id?: string;
  link?: string;
  color?: Color;
  isBranch?: boolean;
  isInit?: boolean;
  image?: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  size?: "sm" | "lg";
  faIcon?: IconProp;
  Element?: ReactNode;
  iconSize?: number;
}

const CommitNode = ({
  id,
  link,
  color,
  isBranch,
  isInit,
  image,
  Icon,
  size = "sm",
  faIcon,
  iconSize,
  Element,
}: CommitNodeProps) => {
  return (
    <Box
      id={id}
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
          bottom: isInit ? 50 : 0,
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
        {Icon && (
          <Icon sx={{ fontSize: iconSize ? iconSize : 50, fill: "white" }} />
        )}
        {faIcon && (
          <FontAwesomeIcon
            icon={faIcon}
            style={{ fontSize: iconSize ? iconSize : 50 }}
            color="#FFFFFF"
          />
        )}
        {image && (
          <img
            src={image}
            style={{
              width: `${iconSize ? iconSize : 100}%`,
              objectFit: "scale-down",
            }}
            alt=""
          />
        )}
        {Element}
      </Box>
    </Box>
  );
};

export default CommitNode;
