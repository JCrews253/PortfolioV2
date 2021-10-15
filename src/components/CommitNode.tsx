interface CommitNodeProps {
  id?: string;
  link?: string;
  backgroundColor: string;
  borderColor: string;
  branchColor: string;
  image: string;
  imageSize?: number;
}

const CommitNode = ({
  id,
  link,
  backgroundColor,
  borderColor,
  branchColor,
  image,
  imageSize,
}: CommitNodeProps) => {
  return (
    <div
      style={{
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        id={id}
        style={{
          borderLeft: `solid 5px ${branchColor}`,
          height: "100%",
          position: "relative",
          left: "50%",
          zIndex: 0,
        }}
      />
      <div
        className={link && "linkedCommit"}
        style={{
          width: "90px",
          height: "90px",
          backgroundColor: backgroundColor,
          borderRadius: "100%",
          border: `solid 10px ${borderColor}`,
          display: "flex",
          justifyContent: "center",
          zIndex: 1,
        }}
        onClick={() => {
          if (link) {
            window.open(link)?.focus();
          }
        }}
      >
        <img
          src={image}
          style={{
            width: `${imageSize ?? 80}%`,
            objectFit: "scale-down",
          }}
        />
      </div>
    </div>
  );
};

export default CommitNode;
