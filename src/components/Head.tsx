import ProfilePicture from "../Images/profile-picture.jpg";

interface HeadProps {
  backgroundColor: string;
  borderColor: string;
  branchColor: string;
}
const Head = ({ backgroundColor, borderColor, branchColor }: HeadProps) => {
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "-30px",
      }}
    >
      <div
        id="head"
        style={{
          height: "250px",
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
            top: "40px",
            zIndex: 0,
          }}
        />
        <div
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: backgroundColor,
            borderRadius: "100%",
            border: `solid 10px ${borderColor}`,
            display: "flex",
            justifyContent: "center",
            zIndex: 1,
            overflow: "Hidden",
          }}
        >
          <img
            src={ProfilePicture}
            style={{
              width: `100%`,
              objectFit: "scale-down",
            }}
          />
        </div>
      </div>
      <div style={{ flexGrow: 1 }} />
    </div>
  );
};

export default Head;
