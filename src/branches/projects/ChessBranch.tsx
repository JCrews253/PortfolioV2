import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import { Code, Fastfood, GridOn, Info, OpenInNew } from "@mui/icons-material";
import Commit from "../../components/Commit";

const ChessBranch = () => {
  return (
    <>
      <Commit
        size="lg"
        id="head"
        faIcon={faChessKing}
        title="Chess AI - Min Max Algo"
        branch="chess"
        iconSize={100}
      />
      <Commit
        Icon={Info}
        title="Chess AI that uses the Min-Max game algorithm to determine its moves."
      />
      <Commit
        Icon={OpenInNew}
        title="View Live!"
        link="https://jcrews253.github.io/chess/"
      />
      <Commit
        Icon={Code}
        title="Source Code"
        link="https://github.com/JCrews253/chess"
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
