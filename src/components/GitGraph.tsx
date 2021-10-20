import Branch from "./Branch";
import Commit from "./Commit";
import Projects from "../Images/website-design-64.png";
import SELImage from "../Images/SEL.svg";
import PSIImage from "../Images/psi_adobespark.png";
import WorkIcon from "../Images/briefcase-64.png";
import Github from "../Images/github-6-64.png";
import Git from "../Images/git.png";
import LinkedInIcon from "../Images/linkedin-3-64.png";
import PdfIcon from "../Images/pdf-64.png";
import ChessIcon from "../Images/chess-26-64.png";
import SortingIcon from "../Images/bar-chart-3-64.png";
import PathIcon from "../Images/gantt-chart-64.png";
import LinkIcon from "../Images/link-5-64.png";
import GrcLogo from "../Images/GrcLogo.png";
import WsuLogo from "../Images/wsu.png";
import EducationLogo from "../Images/school-64.png";
import EmailIcon from "../Images/new-post-64.png";
import Head from "./Head";

const GitGraph = () => {
  return (
    <div
      style={{
        padding: "0px 100px",
        marginTop: "70px",
        maxWidth: "1200px",
        width: "100%",
        boxShadow: "-5px 0px 3px -3px black, 5px 0px 3px -3px black",
      }}
    >
      {/* <Head
        backgroundColor="#7289DA"
        borderColor="#4E5D94"
        branchColor="#4E5D94"
      />
      <Commit
        id="work"
        backgroundColor="#7289DA"
        borderColor="#4E5D94"
        branchColor="#4E5D94"
        commitTitle="Work Experience"
        image={WorkIcon}
        imageSize={50}
      />
      <Branch>
        <Commit
          link={"https://selinc.com/"}
          backgroundColor="#162D71"
          borderColor="#070E24"
          branchColor="#c62828"
          commitTitle="Associate Software Engineer"
          commitContent="Schweitzer Engineering Labratories"
          commitSubContent="C#, React, GraphQL"
          commitDate="October 2020 - Present"
          image={SELImage}
        />
        <Commit
          link={"https://processsolutions.com/"}
          backgroundColor="#64B4C9"
          borderColor="#3D6F7C"
          branchColor="#c62828"
          commitTitle="Control Systems Engineer"
          commitContent="Process Solutions Inc"
          commitSubContent="C#, RSLogix, Wonderware"
          commitDate="April 2018 - October 2020"
          image={PSIImage}
          imageSize={85}
        />
      </Branch>
      <Commit
        id="projects"
        backgroundColor="#7289DA"
        borderColor="#4E5D94"
        branchColor="#4E5D94"
        commitTitle="Personal Projects"
        image={Projects}
        imageSize={50}
      />
      <Branch>
        <Commit
          backgroundColor="#162D71"
          borderColor="#070E24"
          branchColor="#c62828"
          commitTitle="Recipe Planner"
          commitSubContent="C#, React, GraphQL, MongoDB"
          image={SELImage}
        />
        <Commit
          link={"https://jcrews253.github.io/chess/"}
          backgroundColor="#4C566A"
          borderColor="#2E3440"
          branchColor="#c62828"
          commitTitle="Chess AI - Min Max Algo"
          commitSubContent="React, Typescript"
          image={ChessIcon}
          imageSize={50}
        />
        <Commit
          link={"https://jcrews253.github.io/path-finding-visualizer/"}
          backgroundColor="#EA00D7"
          borderColor="#9D0090"
          branchColor="#c62828"
          commitTitle="Retro Path Finding Visualization"
          commitSubContent="React, Redux, Express, Typescript"
          image={PathIcon}
          imageSize={50}
        />
        <Commit
          link={"https://jcrews253.github.io/sorting-visualizer/"}
          backgroundColor="#00F6FF"
          borderColor="#00ACB2"
          branchColor="#c62828"
          commitTitle="Sorting Visualization"
          commitSubContent="React, Typescript"
          image={SortingIcon}
          imageSize={50}
        />
      </Branch>
      <Commit
        id="education"
        backgroundColor="#7289DA"
        borderColor="#4E5D94"
        branchColor="#4E5D94"
        commitTitle="Education"
        image={EducationLogo}
        imageSize={50}
      />
      <Branch>
        <Commit
          link="https://wsu.edu/"
          backgroundColor="#981E32"
          borderColor="#651321"
          branchColor="#c62828"
          commitTitle="Washington State University"
          commitContent="B.S. Mechanical Engineering"
          commitDate="GPA: 3.8"
          image={WsuLogo}
          imageSize={100}
        />
        <Commit
          link="https://www.greenriver.edu/"
          backgroundColor="#2C882B"
          borderColor="#1F611D"
          branchColor="#c62828"
          commitTitle="Green River College"
          commitContent="A.A.S. Mechanical Engineering"
          commitDate="GPA: 3.5"
          image={GrcLogo}
          imageSize={90}
        />
      </Branch>
      <Commit
        id="contact"
        backgroundColor="#7289DA"
        borderColor="#4E5D94"
        branchColor="#4E5D94"
        commitTitle="Contact"
        image={LinkIcon}
        imageSize={50}
      />
      <Branch>
        <Commit
          link="https://github.com/JCrews253"
          backgroundColor="#161B22"
          borderColor="#0D1117"
          branchColor="#c62828"
          commitTitle="Github"
          image={Github}
          imageSize={50}
        />
        <Commit
          link="https://www.linkedin.com/in/james-crews-208742132/"
          backgroundColor="#0A66C2"
          borderColor="#05386B"
          branchColor="#c62828"
          commitTitle="LinkedIn"
          image={LinkedInIcon}
          imageSize={50}
        />
        <Commit
          backgroundColor="#FA0F00"
          borderColor="#AD0A00"
          branchColor="#c62828"
          commitTitle="Resume"
          image={PdfIcon}
          imageSize={50}
        />
        <Commit
          backgroundColor="#27A3E3"
          borderColor="#0074CD"
          branchColor="#c62828"
          commitTitle="Email"
          image={EmailIcon}
          imageSize={50}
        />
      </Branch>
      <Commit
        backgroundColor="#7289DA"
        borderColor="#4E5D94"
        branchColor="#4E5D94"
        commitTitle="Git Init"
        image={Git}
        imageSize={50}
      /> */}
    </div>
  );
};

export default GitGraph;
