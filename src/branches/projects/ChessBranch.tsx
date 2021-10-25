import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import { Fastfood, GridOn, Info, OpenInNew } from "@mui/icons-material";
import Commit from "../../components/Commit";

const ChessBranch = () => {
  return (
    <>
      <Commit
        size="lg"
        faIcon={faChessKing}
        title="Chess AI - Min Max Algo"
        branch="chess"
        iconSize={100}
      />
      <Commit Icon={Info} title="About" />
      <Commit
        Icon={OpenInNew}
        title="View Live!"
        link="https://jcrews253.github.io/chess/"
      />
      <Commit
        title="Next Project: Recipe Planner"
        Icon={Fastfood}
        branch="recipe"
        routeBranch
      />
      <Commit
        title="Previous Project: Path Finding Visualization"
        Icon={GridOn}
        isInit
        branch="pathFinding"
        routeBranch
      />
    </>
  );
};

export default ChessBranch;
