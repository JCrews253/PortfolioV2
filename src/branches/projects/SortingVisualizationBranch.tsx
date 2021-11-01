import { BarChart, Info, OpenInNew, GridOn, Code } from "@mui/icons-material";
import Commit from "../../components/Commit";

const SortingVisualizationBranch = () => {
  return (
    <>
      <Commit
        size="lg"
        id="head"
        Icon={BarChart}
        title="Sorting Visualization"
        branch="sorting"
        iconSize={100}
      />
      <Commit
        Icon={Info}
        title="About"
        content="React app that animates a variety of popular sorting algorithms to give a visual representation of how they work. 
      The animation logic works by tracking of all the index comparisons in order and pushing them into a queue. Once the array is sorted, the queue is then looped through 
      using a timeout to set the styles of the current index being compared."
      />
      <Commit Icon={Code} title="Tech stack" subContent="React, Typescript" />
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
