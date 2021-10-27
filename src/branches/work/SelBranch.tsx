import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { CheckCircle, Code, Info, OpenInNew } from "@mui/icons-material";
import Branch from "../../components/Branch";
import Commit from "../../components/Commit";
import SelLogo from "../../Icons/SelLogo";
import PsiLogo from "../../Images/psi_adobespark.png";

const SelBranch = () => {
  return (
    <>
      <Commit
        size="lg"
        Element={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "70px",
              fill: "#FFFFFF",
            }}
          >
            <SelLogo />
          </div>
        }
        title="Schweitzer Engineering Laboratories"
        subContent="Associate Software Engineer"
        branch="sel"
        iconSize={100}
      />
      <Commit
        Icon={Info}
        title="About"
        content="At my current role at SEL, I am a part of the development team working on Grid Configurator. This is an ASP.NET app used to configure 
        relays in power stations around the world."
      />
      <Commit
        Icon={Code}
        title="Tech stack"
        subContent="C#, React, Typescript, GraphQL"
      />
      <Commit title="Accomplishments/Tasks" faIcon={faTrophy} iconSize={38} />
      <Branch>
        <Commit
          title="Collaborated on a team of engineers to execute user interface enhancements."
          Icon={CheckCircle}
          isBranch
        />
        <Commit
          title="Implemented new full stack features to make end users workflow's more efficient."
          Icon={CheckCircle}
          isBranch
        />
        <Commit
          title="Created reusable React components that were added to a library shared across the company."
          Icon={CheckCircle}
          isBranch
        />
        <Commit
          title="Developed new API endpoints as well as improved speed and reliability of existing ones."
          Icon={CheckCircle}
          isBranch
        />
        <Commit
          title="Write comprehensive tests covering every new feature that is implemented."
          Icon={CheckCircle}
          isBranch
        />
      </Branch>
      <Commit
        Icon={OpenInNew}
        title="Schweitzer Engineering Laboratories Website"
        link="https://selinc.com/"
      />
      <Commit
        Icon={OpenInNew}
        title="Grid Configurator page"
        link="https://selinc.com/products/5037/"
      />
      <Commit
        title="Previous Work: Process Solutions Inc"
        image={PsiLogo}
        iconSize={80}
        isInit
        branch="psi"
        routeBranch
      />
    </>
  );
};

export default SelBranch;
