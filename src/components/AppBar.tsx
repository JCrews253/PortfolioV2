const AppBar = () => {
  const HandleClick = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView();
  };
  return (
    <div className="appBar">
      <h2 className="appBarNavButton" onClick={() => window.scrollTo(0, 0)}>
        James Crews
      </h2>
      <div style={{ flexGrow: 1 }} />
      <h3 className="appBarNavButton" onClick={() => HandleClick("work")}>
        Work
      </h3>
      <h3 className="appBarNavButton" onClick={() => HandleClick("projects")}>
        Projects
      </h3>
      <h3 className="appBarNavButton" onClick={() => HandleClick("education")}>
        Education
      </h3>
      <h3 className="appBarNavButton" onClick={() => HandleClick("contact")}>
        Contact
      </h3>
    </div>
  );
};

export default AppBar;
