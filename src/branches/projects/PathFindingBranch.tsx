import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import { BarChart, Code, GridOn, Info, OpenInNew } from "@mui/icons-material";
import Commit from "../../components/Commit";

const PathFindingBranch = () => {
  return (
    <>
      <Commit
        size="lg"
        id="head"
        Icon={GridOn}
        title="Retro Path Finding Visualization"
        branch="pathFinding"
        iconSize={100}
      />
      <Commit
        Icon={Info}
        title="About"
        content="Full stack app that uses React as a front-end and an express server on the backend to animate common path finding algorithms.
      This apps animations work similar to the sorting visualizer by solving the path and storing the results in an animation queue that is later played
      back. The operation is slightly different since the animation queue is now being requested from an express server hosted on Heroku. A Redux store is
      used to handle actions and algorithm selection. Some of the cool features of this app are the ability to create your own custom maze, and also being
      able to drag the start or end points once the maze has been solved to see an instant update of the calculated path."
      />
      <Commit
        Icon={Code}
        title="Tech stack"
        subContent="React, Redux, Typescript, Express"
      />
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
