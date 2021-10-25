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
          title="Created a tool in C# that generates a 80% of PLC logic for our most common project types."
          Icon={CheckCircle}
          isBranch
        />
        <Commit
          title="Redesigned all previous Wonderware HMI screens to be more object like instead of creating duplicates of the same screen."
          Icon={CheckCircle}
          isBranch
        />
        <Commit
          title="Completed high profile projects which opened more opportunities for company growth."
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
        title="Next Work: Schweitzer Engineering Labratories"
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
        title="Latest Project: Recipe Planner"
        Icon={Fastfood}
        isInit
        branch="recipe"
        routeBranch
      />
    </>
  );
};

export default PsiBranch;