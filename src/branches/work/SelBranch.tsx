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
        id="head"
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
        subContent="C#, React, Typescript, GraphQL, NUnit, SpecFlow"
      />
      <Commit title="Accomplishments/Tasks" faIcon={faTrophy} iconSize={38} />
      <Branch>
        <Commit
          content="Collaborated with UI/UX team from design to implementation of dozens of new UIs that improve user's workflows."
          Icon={CheckCircle}
          isBranch
        />
        <Commit
          content="Implemented new edit session feature that persists user's changes, allowing them to navigate between projects without having to save."
          Icon={CheckCircle}
          isBranch
        />
        <Commit
          content="Created 10+ new API endpoints as well as improved the speed of existing ones."
          Icon={CheckCircle}
          isBranch
        />
        <Commit
          content="Contributed reusable React components to an internal library shared across the company."
          Icon={CheckCircle}
          isBranch
        />
        <Commit
          content="Wrote extensive test coverage for each new feature being implemented."
          Icon={CheckCircle}
          isBranch
        />
      </Branch>
      <Commit
        Icon={OpenInNew}
        title="Schweitzer Engineering Laboratories website"
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
