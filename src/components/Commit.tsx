import CommitNode, { CommitNodeProps } from "./CommitNode";
import CommitMessage, { CommitMessageProps } from "./CommitMessage";
import { Box } from "@mui/system";

interface CommitProps extends CommitNodeProps, CommitMessageProps {}

const Commit = ({
  id,
  link,
  color,
  isBranch,
  Icon,
  image,
  size = "sm",
  title,
  content,
  subContent,
  date,
}: CommitProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        maxWidth: "1200px",
      }}
    >
      <CommitNode
        id={id}
        link={link}
        color={color}
        isBranch={isBranch}
        Icon={Icon}
        image={image}
        size={size}
      />

      <CommitMessage
        title={title}
        content={content}
        subContent={subContent}
        date={date}
        size={size}
      />
    </Box>
  );
};

export default Commit;
