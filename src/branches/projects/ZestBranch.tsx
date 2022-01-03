import { Code, Fastfood, Info, OpenInNew } from "@mui/icons-material";
import Commit from "../../components/Commit";
import PsiLogo from "../../Images/psi_adobespark.png";
import Vinyl from "../../Images/vinyl.png";

const ZestBranch = () => {
  return (
    <>
      <Commit
        size="lg"
        id="head"
        Icon={Fastfood}
        title="Zest"
        branch="zest"
        iconSize={100}
      />
      <Commit Icon={Info} title="About" content="WIP" />
      <Commit
        Icon={OpenInNew}
        title="View Live!"
        link="https://foodplanner20211113152303.azurewebsites.net/"
      />
      <Commit
        Icon={Code}
        title="Source Code"
        link="https://github.com/JCrews253/FoodPlanner"
      />
      <Commit
        title="Work Experience: Process Solutions Inc"
        image={PsiLogo}
        iconSize={80}
        isInit
        branch="psi"
        routeBranch
      />
      <Commit
        title="Previous Project: Vinyl Discord Bot"
        image={Vinyl}
        iconSize={80}
        isInit
        branch="vinyl"
        routeBranch
      />
    </>
  );
};

export default ZestBranch;
