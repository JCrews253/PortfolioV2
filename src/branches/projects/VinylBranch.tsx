import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import { Info, OpenInNew, Code, Fastfood } from "@mui/icons-material";
import Commit from "../../components/Commit";
import Vinyl from "../../Images/vinyl.png";

const VinylBranch = () => {
  return (
    <>
      <Commit
        size="lg"
        id="head"
        image={Vinyl}
        title="Vinyl Discord Bot"
        branch="vinyl"
        iconSize={80}
      />
      <Commit
        Icon={Info}
        title="About"
        content=""
        subContent="Tech Stack: C#"
      />
      <Commit
        Icon={OpenInNew}
        title="Add to your discord server!"
        link="https://discord.com/oauth2/authorize?client_id=773721125871812622&scope=bot"
      />
      <Commit
        Icon={Code}
        title="Source Code"
        link="https://github.com/JCrews253/Vinyl-Discord-Bot"
      />
      <Commit
        title="Next Project: Zest"
        Icon={Fastfood}
        branch="zest"
        routeBranch
      />
      <Commit
        title="Previous Project: Chess AI - Min Max Algo"
        faIcon={faChessKing}
        isInit
        branch="chess"
        routeBranch
      />
    </>
  );
};

export default VinylBranch;
