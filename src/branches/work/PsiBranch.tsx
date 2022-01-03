import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { CheckCircle, Fastfood, Info, OpenInNew } from "@mui/icons-material";
import Branch from "../../components/Branch";
import Commit from "../../components/Commit";
import SelLogo from "../../Icons/SelLogo";
import PsiLogo from "../../Images/psi_adobespark.png";

const PsiBranch = () => {
  return (
    <>
      <Commit
        size="lg"
        id="head"
        image={PsiLogo}
        title="Process Solutions Inc"
        subContent="Control Systems Engineer"
        branch="psi"
        iconSize={80}
      />
      <Commit Icon={Info} title="About" />
      <Commit title="Accomplishments/Tasks" faIcon={faTrophy} iconSize={38} />
      <Branch>
        <Commit
          content="Created a tool in C# that generates 80% of PLC logic for our most common project types."
          Icon={CheckCircle}
          isBranch
        />
        <Commit
          content="Redesigned all Wonderware HMI UI's to be object based resulting in significant reduction in development time."
          Icon={CheckCircle}
          isBranch
        />
        <Commit
          content="Completed high profile projects which opened more opportunities for company growth."
          Icon={CheckCircle}
          isBranch
        />
      </Branch>
      <Commit
        Icon={OpenInNew}
        title="Process Solutions Inc Website"
        link="https://processsolutions.com/"
      />
      <Commit
        title="Next Work: Schweitzer Engineering Laboratories"
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
        iconSize={80}
        isInit
        branch="sel"
        routeBranch
      />
      <Commit
        title="Latest Project: Zest"
        Icon={Fastfood}
        isInit
        branch="zest"
        routeBranch
      />
    </>
  );
};

export default PsiBranch;
