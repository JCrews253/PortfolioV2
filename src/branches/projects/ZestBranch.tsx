import { Code, Fastfood, Info, OpenInNew } from "@mui/icons-material";
import Commit from "../../components/Commit";
import PsiLogo from "../../Images/psi_adobespark.png";
import Vinyl from "../../Images/vinyl.png";

const ZestBranch = () => {
  return (
    <>
      <Commit
        size="lg"
        id="head"
        Icon={Fastfood}
        title="Zest"
        branch="zest"
        iconSize={100}
      />
      <Commit
        Icon={Info}
        title="About"
        content="Zest is the current project I am working on for saving and easily viewing your favorite recipes.
      Currently, Zest supports adding recipes (with photos), browsing all recipes, and saving recipes to your account. Features currently being 
      implemented are a calendar for planning out meals for the week, shopping list for selected meals, and browsing for recipes based on categories.
      Zest is a full stack app that uses React as a front end, ASP.NET (C#) as a backend, and Graphql as its API layer. Authentication is handled 
      through Auth0, which allows signing in/up with Google. Recipe data is hosted on MongDB Atlas, photos on Azure storage containers and the app 
      itself on Azure App Services."
        subContent="Tech Stack: React, C#, GraphQL"
      />
      <Commit
        Icon={OpenInNew}
        title="View Live!"
        link="https://foodplanner20211113152303.azurewebsites.net/"
      />
      <Commit
        Icon={Code}
        title="Source Code"
        link="https://github.com/JCrews253/FoodPlanner"
      />
      <Commit
        title="Work Experience: Process Solutions Inc"
        image={PsiLogo}
        iconSize={80}
        isInit
        branch="psi"
        routeBranch
      />
      <Commit
        title="Previous Project: Vinyl Discord Bot"
        image={Vinyl}
        iconSize={80}
        isInit
        branch="vinyl"
        routeBranch
      />
    </>
  );
};

export default ZestBranch;
