interface CommitMessageProps {
  title?: string;
  content?: string;
  subContent?: string;
  date?: string;
}

const CommitMessage = ({
  title,
  content,
  subContent,
  date,
}: CommitMessageProps) => {
  return (
    <div
      style={{
        paddingLeft: "20px",
        display: "flex",
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
      <div>
        {title && (
          <h3
            style={{
              margin: "0",
            }}
          >
            {title}
          </h3>
        )}
        {content && (
          <p
            style={{
              margin: "0",
            }}
          >
            {content}
          </p>
        )}
        {subContent && (
          <p style={{ fontStyle: "italic", margin: "0" }}>{subContent}</p>
        )}
      </div>
      <div>{date && <p>{date}</p>}</div>
    </div>
  );
};

export default CommitMessage;
