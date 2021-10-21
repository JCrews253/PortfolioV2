import CommitNode, { CommitNodeProps } from "./CommitNode";
import CommitMessage, { CommitMessageProps } from "./CommitMessage";
import { Box } from "@mui/system";

interface CommitProps extends CommitNodeProps, CommitMessageProps {}

const Commit = ({
  id,
  link,
  color,
  isBranch,
  isInit,
  Icon,
  image,
  size = "sm",
  title,
  content,
  subContent,
  date,
  faIcon,
  iconSize,
  Element,
  branch,
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
        isInit={isInit}
        Icon={Icon}
        faIcon={faIcon}
        image={image}
        size={size}
        iconSize={iconSize}
        Element={Element}
        branch={branch}
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
