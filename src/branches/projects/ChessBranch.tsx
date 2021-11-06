import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import { Code, Fastfood, GridOn, Info, OpenInNew } from "@mui/icons-material";
import Commit from "../../components/Commit";
import Vinyl from "../../Images/vinyl.png";

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
        title="About"
        content="Chess AI that uses the Min Max algorithm to decided which move is best. To determine which move is best, the AI looks at 
      every possible move for 3 turns out and assigns each move a score. The score is calculated using the current board position for each piece
      and which pieces remain on the board. These scores are then combined to give a total score for that move. Once all scores have been calculated,
      and placed into a decision tree, the AI chooses the score that increases its score the most during its simulated turn, and chooses the lower 
      score when it is the opposing players turn. This alternation continues until it has reached the head of the decision tree, where then the 
      AI will make its actual move. Some of the highlights of this project are possible move highlighting when it is the players turn, and a list of
      all moves that have been performed during the game."
        subContent="Tech Stack: React, Typescript"
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
        title="Next Project: Vinyl Discord Bot"
        image={Vinyl}
        iconSize={80}
        branch="vinyl"
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
