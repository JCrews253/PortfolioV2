import { Box, Theme } from "@mui/system";
import { ColorSelector, ColorSelectorDark } from "../Theme";
import { ReactNode, useContext } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BranchContext } from "../App";
import { branch } from "../branches/Branch";

export interface CommitNodeProps {
  id?: string;
  link?: string;
  isBranch?: boolean;
  isInit?: boolean;
  image?: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  IconColor?: string;
  size?: "sm" | "md" | "lg";
  faIcon?: IconProp;
  Element?: ReactNode;
  iconSize?: number;
  branch?: branch;
  routeBranch?: boolean;
}

const CommitNode = ({
  id,
  link,
  isBranch,
  isInit,
  image,
  Icon,
  IconColor,
  size = "md",
  faIcon,
  iconSize,
  Element,
  branch,
  routeBranch,
}: CommitNodeProps) => {
  const { setBranch } = useContext(BranchContext);
  const hoverable = !!link || !!routeBranch;

  const GetBackgroundColor = (theme: Theme) => {
    if (branch) {
      return ColorSelector(branch);
    } else if (isBranch) {
      return theme.palette.secondary.light;
    } else {
      return theme.palette.primary.main;
    }
  };

  const GetBorderColor = (theme: Theme) => {
    if (branch) {
      return ColorSelectorDark(branch);
    } else if (isBranch) {
      return theme.palette.secondary.main;
    } else {
      return theme.palette.primary.dark;
    }
  };

  const GetContainerSize = () => {
    switch (size) {
      case "sm":
        return "100px";
      case "lg":
        return "250px";
      case "md":
      default:
        return "150px";
    }
  };

  const GetNodeSize = () => {
    switch (size) {
      case "sm":
        return "60px";
      case "lg":
        return "150px";
      case "md":
      default:
        return "90px";
    }
  };

  const GetPadding = () => {
    switch (size) {
      case "lg":
        return undefined;
      case "sm":
      case "md":
      default:
        return "0px 30px";
    }
  };

  return (
    <Box
      id={id}
      sx={{
        minHeight: GetContainerSize(),
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        userSelect: "none",
        padding: GetPadding(),
        marginLeft: size === "sm" ? "15px" : undefined,
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
          height: size !== "lg" ? "100%" : "50%",
          position: "absolute",
          left: "50%",
          bottom: isInit ? 50 : 0,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          width: GetNodeSize(),
          height: GetNodeSize(),
          backgroundColor: (theme) => GetBackgroundColor(theme),
          borderRadius: "100%",
          border: (theme) => `solid 10px ${GetBorderColor(theme)}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          overflow: "hidden",
          "&:hover": {
            cursor: hoverable ? "pointer" : undefined,
            transform: hoverable ? "scale(1.1)" : undefined,
            transition: hoverable ? "transform 0.1s ease-in-out" : undefined,
          },
        }}
        onClick={() => {
          if (link) {
            window.open(link)?.focus();
          } else if (branch && routeBranch) {
            setBranch(branch);
          }
        }}
      >
        {Icon && (
          <Icon
            sx={{
              fontSize: iconSize ? iconSize : 50,
              fill: IconColor ?? "white",
            }}
          />
        )}
        {faIcon && (
          <FontAwesomeIcon
            icon={faIcon}
            style={{ fontSize: iconSize ? iconSize : 50 }}
            color={IconColor ?? "#FFFFFF"}
          />
        )}
        {image && (
          <img
            src={image}
            style={{
              width: `${iconSize ? iconSize : 100}%`,
              objectFit: "scale-down",
              borderRadius: "50%",
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
