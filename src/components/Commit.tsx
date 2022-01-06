import CommitNode, { CommitNodeProps } from "./CommitNode";
import CommitMessage, { CommitMessageProps } from "./CommitMessage";
import { Box } from "@mui/system";

interface CommitProps extends CommitNodeProps, CommitMessageProps {}

const Commit = ({
  id,
  link,
  isBranch,
  isInit,
  Icon,
  IconColor,
  image,
  size = "md",
  title,
  content,
  subContent,
  date,
  faIcon,
  iconSize,
  Element,
  branch,
  routeBranch,
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
        isBranch={isBranch}
        isInit={isInit}
        Icon={Icon}
        IconColor={IconColor}
        faIcon={faIcon}
        image={image}
        size={size}
        iconSize={iconSize}
        Element={Element}
        branch={branch}
        routeBranch={routeBranch}
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
