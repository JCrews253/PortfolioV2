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
  Code,
  Person,
} from "@mui/icons-material";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faChessKing } from "@fortawesome/free-solid-svg-icons";
import Branch from "../components/Branch";
import WsuLogo from "../Images/wsu.png";
import GrcLogo from "../Images/GrcLogo.png";
import SelLogo from "../Icons/SelLogo";
import PsiLogo from "../Images/psi_adobespark.png";
import Resume from "../Images/JamesResume.pdf";
import Vinyl from "../Images/vinyl.png";

const MainBranch = () => (
  <>
    <Commit
      id="head"
      size="lg"
      image={ProfilePicture}
      title="Hello! My name is James Crews."
    />
    <Commit Icon={Info} title="About" id="about" />
    <Branch>
      <Commit
        Icon={Person}
        isBranch
        content="I am a self-taught software engineer with a background in both front-end and back-end development. I love programming new ideas and solving complex problems."
      />
      <Commit
        Icon={Code}
        isBranch
        title="Skills"
        content="C#, React, Typescript, GraphQL, Material UI, CI/CD, git, .NET core, NUnit, SpecFlow, HTML, CSS"
      />
    </Branch>
    <Commit Icon={Work} title="Work Experience" id="work" />
    <Branch>
      <Commit
        Element={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "40px",
              fill: "#FFFFFF",
            }}
          >
            <SelLogo />
          </div>
        }
        title="Associate Software Engineer"
        content="Schweitzer Engineering Laboratories"
        subContent="C#, React, GraphQL, Typescript"
        date="October 2020-Present"
        isBranch
        branch="sel"
        routeBranch
      />
      <Commit
        image={PsiLogo}
        iconSize={80}
        title="Control Systems Engineer"
        content="Process Solutions Inc"
        subContent="C#, RSLogix, WonderWare"
        date="April 2018-October 2020"
        isBranch
        branch="psi"
        routeBranch
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
        isBranch
        branch="recipe"
        routeBranch
      />
      <Commit
        image={Vinyl}
        iconSize={80}
        title="Vinyl Discord Bot"
        content="Discord bot that plays music on request"
        subContent="C#"
        isBranch
        branch="vinyl"
        routeBranch
      />
      <Commit
        faIcon={faChessKing}
        title="Chess AI - Min Max Algo"
        content="Chess AI with move highlighting"
        subContent="React, Typescript"
        isBranch
        branch="chess"
        routeBranch
      />
      <Commit
        Icon={GridOn}
        title="Retro Path Finding Visualization"
        content="Visualization of popular path finding algorithms"
        subContent="React, Redux, Typescript, Express"
        isBranch
        branch="pathFinding"
        routeBranch
      />
      <Commit
        Icon={BarChart}
        title="Sorting Visualization"
        content="Visualization of popular sorting algorithms"
        subContent="React, Typescript"
        isBranch
        branch="sorting"
        routeBranch
      />
    </Branch>
    <Commit Icon={School} title="Education" id="education" />
    <Branch>
      <Commit
        image={WsuLogo}
        title="Washington State University"
        content="B.S. Mechanical Engineering"
        date="GPA: 3.8"
        branch="wsu"
        isBranch
      />
      <Commit
        image={GrcLogo}
        title="Green River College"
        content="A.A.S. Mechanical Engineering"
        date="GPA: 3.5"
        branch="grc"
        iconSize={80}
        isBranch
      />
    </Branch>
    <Commit Icon={ContactPage} title="Contact" id="contact" />
    <Branch>
      <Commit
        Icon={GitHub}
        title="Github"
        branch="github"
        isBranch
        link="https://github.com/JCrews253"
      />
      <Commit
        Icon={LinkedIn}
        title="LinkedIn"
        branch="linkedIn"
        isBranch
        link="https://linkedin.com/in/jamesrcrews"
      />
      <Commit
        Icon={InsertDriveFile}
        title="Resume"
        branch="resume"
        isBranch
        link={Resume}
      />
      <Commit
        Icon={Email}
        title="Email"
        branch="email"
        isBranch
        link="mailto:jcrews206@gmail.com"
      />
    </Branch>
    <Commit faIcon={faGitAlt} title="Git init" isInit />
  </>
);

export default MainBranch;
