import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export interface CommitMessageProps {
  title?: string;
  content?: string;
  subContent?: string;
  date?: string;
  size?: "sm" | "md" | "lg";
}

const CommitMessage = ({
  title,
  content,
  subContent,
  date,
  size = "md",
}: CommitMessageProps) => {
  return (
    <Box
      sx={{
        paddingLeft: size === "lg" ? "20px" : undefined,
        paddingRight: "32px",
        display: "flex",
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
      <div>
        {title && (
          <Typography
            variant="h1"
            sx={{
              fontWeight: 550,
              fontSize: size !== "lg" ? "16pt" : "22pt",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {title}
          </Typography>
        )}
        {content && (
          <Typography
            sx={{
              fontSize: "12pt",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {content}
          </Typography>
        )}
        {subContent && (
          <Typography
            sx={{
              fontStyle: "italic",
              fontSize: "12pt",
              color: (theme) => theme.palette.text.primary,
              lineHeight: 1.2,
            }}
          >
            {subContent}
          </Typography>
        )}
      </div>
      {date && (
        <Typography
          sx={{
            fontSize: "12pt",
            paddingRight: 4,
            color: (theme) => theme.palette.text.primary,
            alignSelf: "center",
          }}
        >
          {date}
        </Typography>
      )}
    </Box>
  );
};

export default CommitMessage;
