import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import { BarChart, Code, GridOn, Info, OpenInNew } from "@mui/icons-material";
import Commit from "../../components/Commit";

const PathFindingBranch = () => {
  return (
    <>
      <Commit
        size="lg"
        Icon={GridOn}
        title="Retro Path Finding Visualization"
        branch="pathFinding"
        iconSize={100}
      />
      <Commit Icon={Info} title="About" />
      <Commit
        Icon={OpenInNew}
        title="View Live!"
        link="https://jcrews253.github.io/path-finding-visualizer/"
      />
      <Commit
        Icon={Code}
        title="Source Code"
        link="https://github.com/JCrews253/path-finding-visualizer"
      />
      <Commit
        title="Next Project: Chess AI - Min Max Algo"
        faIcon={faChessKing}
        branch="chess"
        routeBranch
      />
      <Commit
        title="Previous Project: Sorting Visualization"
        Icon={BarChart}
        isInit
        branch="sorting"
        routeBranch
      />
    </>
  );
};

export default PathFindingBranch;
