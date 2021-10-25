import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import { Code, Fastfood, Info, OpenInNew } from "@mui/icons-material";
import Commit from "../../components/Commit";

const RecipePlannerBranch = () => {
  return (
    <>
      <Commit
        size="lg"
        Icon={Fastfood}
        title="Recipe Planner"
        branch="recipe"
        iconSize={100}
      />
      <Commit Icon={Info} title="About" />
      <Commit Icon={OpenInNew} title="View Live!" />
      <Commit
        Icon={Code}
        title="Source Code"
        link="https://github.com/JCrews253/FoodPlanner"
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

export default RecipePlannerBranch;
