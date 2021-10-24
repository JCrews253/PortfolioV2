import Commit from "../components/Commit";
import ProfilePicture from "../Images/profile-picture.jpg";
import {
  Work,
  Info,
  School,
  ContactPage,
  LinkedIn,
  GitHub,
  InsertDriveFile,
  Email,
  BarChart,
  Fastfood,
  GridOn,
} from "@mui/icons-material";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faChessKing } from "@fortawesome/free-solid-svg-icons";
import Branch from "../components/Branch";
import WsuLogo from "../Images/wsu.png";
import GrcLogo from "../Images/GrcLogo.png";
import SelLogo from "../Icons/SelLogo";
import PsiLogo from "../Images/psi_adobespark.png";

const MainBranch = () => {
  return (
    <>
      <Commit
        size="lg"
        image={ProfilePicture}
        title="Hello! My name is James Crews."
      />
      <Commit Icon={Info} title="About" id="about" />
      <Commit Icon={Work} title="Work Experience" id="work" />
      <Branch>
        <Commit
          Element={
            <div
              style={{
                display: "flex",
                width: "70px",
                fill: "#FFFFFF",
              }}
            >
              <SelLogo />
            </div>
          }
          title="Associate Software Engineer"
          content="Schweitzer Engineering Labratories"
          subContent="C#, React, GraphQL, Typescript"
          date="October 2020-Present"
          color="SEL"
          isBranch
          branch="sel"
        />
        <Commit
          image={PsiLogo}
          iconSize={80}
          title="Control Systems Engineer"
          content="Process Solutions Inc"
          subContent="C#, RSLogix, WonderWare"
          date="April 2018-October 2020"
          color="PSI"
          isBranch
          branch="psi"
        />
      </Branch>
      <Commit
        faIcon={faLaptopCode}
        iconSize={38}
        title="Personal Projects"
        id="projects"
      />
      <Branch>
        <Commit
          Icon={Fastfood}
          title="Recipe Planner"
          content="App to find and plan recipes"
          subContent="C#, React, GraphQL, Typescript, MongoDB"
          color="Recipe"
          isBranch
          branch="recipe"
        />
        <Commit
          faIcon={faChessKing}
          title="Chess AI - Min Max Algo"
          content="Chess AI with move highlighting"
          subContent="React, Typescript"
          color="ChessAI"
          isBranch
          branch="chess"
        />
        <Commit
          Icon={GridOn}
          title="Retro Path Finding Visualization"
          content="Visualization of popular path finding algorithms"
          subContent="React, Redux, Typescript, Express"
          color="PathFinding"
          isBranch
          branch="pathfinding"
        />
        <Commit
          Icon={BarChart}
          title="Sorting Visualization"
          content="Visualization of popular sorting algorithms"
          subContent="React, Typescript"
          color="Sorting"
          isBranch
          branch="sorting"
        />
      </Branch>
      <Commit Icon={School} title="Education" id="education" />
      <Branch>
        <Commit
          image={WsuLogo}
          title="Washington State University"
          content="B.S. Mechanical Engineering"
          date="GPA: 3.8"
          color="WSU"
          isBranch
        />
        <Commit
          image={GrcLogo}
          title="Green River College"
          content="A.A.S. Mechanical Engineering"
          date="GPA: 3.5"
          color="GRC"
          iconSize={80}
          isBranch
        />
      </Branch>
      <Commit Icon={ContactPage} title="Contact" id="contact" />
      <Branch>
        <Commit
          Icon={GitHub}
          title="Github"
          color="Github"
          isBranch
          link="https://github.com/JCrews253"
        />
        <Commit
          Icon={LinkedIn}
          title="LinkedIn"
          color="LinkedIn"
          isBranch
          link="https://www.linkedin.com/in/james-crews-208742132"
        />
        <Commit Icon={InsertDriveFile} title="Resume" color="Resume" isBranch />
        <Commit
          Icon={Email}
          title="Email"
          color="Email"
          isBranch
          link="mailto:jcrews206@gmail.com"
        />
      </Branch>
      <Commit faIcon={faGitAlt} title="Git init" isInit />
    </>
  );
};

export default MainBranch;
