import { BarChart, Info, OpenInNew, GridOn, Code } from "@mui/icons-material";
import Commit from "../../components/Commit";

const SortingVisualizationBranch = () => {
  return (
    <>
      <Commit
        size="lg"
        Icon={BarChart}
        title="Sorting Visualization"
        branch="sorting"
        iconSize={100}
      />
      <Commit Icon={Info} title="About" />
      <Commit
        Icon={OpenInNew}
        title="View Live!"
        link="https://jcrews253.github.io/sorting-visualizer/"
      />
      <Commit
        Icon={Code}
        title="Source Code"
        link="https://github.com/JCrews253/sorting-visualizer"
      />
      <Commit
        title="Next Project: Path Finding Visualization"
        Icon={GridOn}
        isInit
        branch="pathFinding"
        routeBranch
      />
    </>
  );
};

export default SortingVisualizationBranch;
