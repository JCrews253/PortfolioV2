import { Box } from "@mui/system";

interface BranchProps {
  children: JSX.Element | JSX.Element[];
}

const Branch = ({ children }: BranchProps) => {
  return (
    <Box
      sx={{
        padding: "37px 0px 37px 40px",
        marginLeft: "85px",
        borderLeft: (theme) => `solid 5px ${theme.palette.primary.dark}`,
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          borderLeft: (theme) => `solid 5px ${theme.palette.secondary.main}`,
          borderBottom: (theme) => `solid 5px ${theme.palette.secondary.main}`,
          borderBottomLeftRadius: "30px",
          position: "absolute",
          left: -5,
          top: -20,
          width: "65px",
          height: "30px",
        }}
      />
      <Box
        sx={{
          borderTop: (theme) => `solid 5px ${theme.palette.secondary.main}`,
          borderRight: (theme) => `solid 5px ${theme.palette.secondary.main}`,
          borderTopRightRadius: "30px",
          position: "absolute",
          left: 60,
          top: 10,
          width: "65px",
          height: "30px",
        }}
      />
      {children}
      <Box
        sx={{
          borderRight: (theme) => `solid 5px ${theme.palette.secondary.main}`,
          borderBottom: (theme) => `solid 5px ${theme.palette.secondary.main}`,
          borderBottomRightRadius: "30px",
          position: "absolute",
          left: 60,
          bottom: 10,
          width: "65px",
          height: "30px",
        }}
      />
      <Box
        sx={{
          borderTop: (theme) => `solid 5px ${theme.palette.secondary.main}`,
          borderLeft: (theme) => `solid 5px ${theme.palette.secondary.main}`,
          borderTopLeftRadius: "30px",
          position: "absolute",
          left: -5,
          bottom: -20,
          width: "65px",
          height: "30px",
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default Branch;
