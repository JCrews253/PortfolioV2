import CommitNode from "./CommitNode";

import CommitMessage from "./CommitMessage";

interface CommitProps {
  id?: string;
  link?: string;
  backgroundColor: string;
  borderColor: string;
  branchColor: string;
  commitTitle: string;
  commitContent?: string;
  commitSubContent?: string;
  commitDate?: string;
  image: string;
  imageSize?: number;
}

const Commit = ({
  id,
  link,
  backgroundColor,
  borderColor,
  branchColor,
  commitTitle,
  commitContent,
  commitSubContent,
  commitDate,
  image,
  imageSize,
}: CommitProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <CommitNode
        id={id}
        link={link}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        branchColor={branchColor}
        image={image}
        imageSize={imageSize}
      />
      <CommitMessage
        title={commitTitle}
        content={commitContent}
        subContent={commitSubContent}
        date={commitDate}
      />
    </div>
  );
};

export default Commit;
