import Commit from "../components/Commit";
import { BarChart, Info, OpenInNew, Image, GridOn } from "@mui/icons-material";

const SortingVisualization = () => {
  return (
    <>
      <Commit
        size="lg"
        Icon={BarChart}
        title="Sorting Visualization"
        content="Visualization of popular sorting algorithms"
        subContent="React, Typescript"
        color="Sorting"
        iconSize={100}
      />
      <Commit Icon={Info} title="About" />
      <Commit
        Icon={OpenInNew}
        title="View Live!"
        link="https://jcrews253.github.io/sorting-visualizer/"
      />
      <Commit Icon={Image} title="Images" />
      <Commit
        title="Next Project: Path Finding Visualization"
        Icon={GridOn}
        color="PathFinding"
        isInit
        branch="pathfinding"
      />
    </>
  );
};

export default SortingVisualization;
