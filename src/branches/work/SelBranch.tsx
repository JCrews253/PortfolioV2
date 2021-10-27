import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { CheckCircle, Info, OpenInNew } from "@mui/icons-material";
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
        title="Schweitzer Engineering Labratories"
        subContent="Associate Software Engineer"
        branch="sel"
        iconSize={100}
      />
      <Commit Icon={Info} title="About" />
      <Commit title="Accomplishments/Tasks" faIcon={faTrophy} iconSize={38} />
      <Branch>
        <Commit
          content="Collaborated on a team of engineers to execute user interface enhancements"
          Icon={CheckCircle}
          isBranch
        />
        <Commit
          content="Collaborated on a team of engineers to execute user interface enhancements"
          Icon={CheckCircle}
          isBranch
        />
        <Commit
          content="Created reusable React components to a library shared across the company"
          Icon={CheckCircle}
          isBranch
        />
      </Branch>
      <Commit
        Icon={OpenInNew}
        title="Schweitzer Engineering Labratories Website"
        link="https://selinc.com/"
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
