import Branch from "./Branch";
import Commit from "./Commit";
import Projects from "../Images/website-design-64.png";
import SELImage from "../Images/SEL.svg";
import PSIImage from "../Images/psi_adobespark.png";
import WorkIcon from "../Images/briefcase-64.png";
import Github from "../Images/github-6-64.png";
import Git from "../Images/git.png";
import Head from "./Head";

const GitGraph = () => {
  return (
    <div style={{ paddingLeft: "30px" }}>
      <Head
        backgroundColor="#FF818D"
        borderColor="#BF616A"
        branchColor="#BF616A"
      />
      <Commit
        backgroundColor="#FF818D"
        borderColor="#BF616A"
        branchColor="#BF616A"
        commitTitle="Work Experience"
        image={WorkIcon}
        imageSize={50}
      />
      <Branch>
        <Commit
          backgroundColor="#162D71"
          borderColor="#070E24"
          branchColor="#5E81AC"
          commitTitle="Associate Software Engineer"
          commitContent="Schweitzer Engineering Labratories"
          commitSubContent="C#, React, GraphQL"
          commitDate="October 2020 - Present"
          image={SELImage}
        />
        <Commit
          backgroundColor="#64B4C9"
          borderColor="#3D6F7C"
          branchColor="#5E81AC"
          commitTitle="Control Systems Engineer"
          commitContent="Process Solutions Inc"
          commitSubContent="C#, RSLogix, Wonderware"
          commitDate="April 2018 - October 2020"
          image={PSIImage}
          imageSize={85}
        />
      </Branch>
      <Commit
        backgroundColor="#FF818D"
        borderColor="#BF616A"
        branchColor="#BF616A"
        commitTitle="Personal Projects"
        image={Projects}
        imageSize={50}
      />
      <Branch>
        <Commit
          backgroundColor="#162D71"
          borderColor="#070E24"
          branchColor="#5E81AC"
          commitTitle="Associate Software Engineer"
          commitContent="Schweitzer Engineering Labratories"
          commitSubContent="C#, React, GraphQL"
          image={SELImage}
        />
        <Commit
          backgroundColor="#64B4C9"
          borderColor="#3D6F7C"
          branchColor="#5E81AC"
          commitTitle="Control Systems Engineer"
          commitContent="Process Solutions Inc"
          commitSubContent="C#, RSLogix, Wonderware"
          image={PSIImage}
          imageSize={85}
        />
      </Branch>
      <Commit
        backgroundColor="#FF818D"
        borderColor="#BF616A"
        branchColor="#BF616A"
        commitTitle="Links"
        image={Github}
        imageSize={50}
      />
      <Branch>
        <Commit
          backgroundColor="#162D71"
          borderColor="#070E24"
          branchColor="#5E81AC"
          commitTitle="Github"
          image={Github}
          imageSize={50}
        />
        <Commit
          backgroundColor="#64B4C9"
          borderColor="#3D6F7C"
          branchColor="#5E81AC"
          commitTitle="Control Systems Engineer"
          commitContent="Process Solutions Inc"
          commitSubContent="C#, RSLogix, Wonderware"
          commitDate="April 2018 - October 2020"
          image={PSIImage}
          imageSize={85}
        />
      </Branch>
      <Commit
        backgroundColor="#FF818D"
        borderColor="#BF616A"
        branchColor="#BF616A"
        commitTitle="git init"
        image={Git}
        imageSize={50}
      />
    </div>
  );
};

export default GitGraph;
