import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { Info } from "@mui/icons-material";
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
      <Commit title="Accomplishments" faIcon={faTrophy} iconSize={38} />
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
