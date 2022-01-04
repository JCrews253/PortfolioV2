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
        content="Discord bot that takes song requests and plays them in the requesting user's voice channel. To play a song, use the '.play' command, followed 
        by a song name or youtube link, i.e. '.play Come Sail Away'. Requesting a song while one is currently play will place it in a queue that will play
        in the requested order. Music is loaded through Lavalink and streamed as a voice through Discord's bot API. Use the link below to add Vinyl to your
        discord server and try it out your self!"
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
