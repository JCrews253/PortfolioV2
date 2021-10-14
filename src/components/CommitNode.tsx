interface CommitNodeProps {
  backgroundColor: string;
  borderColor: string;
  branchColor: string;
  image: string;
  imageSize?: number;
}

const CommitNode = ({
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
        style={{
          borderLeft: `solid 5px ${branchColor}`,
          height: "100%",
          position: "relative",
          left: "50%",
          zIndex: 0,
        }}
      />
      <div
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
