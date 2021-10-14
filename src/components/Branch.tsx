import Commit from "./Commit";

interface BranchProps {
  children: JSX.Element | JSX.Element[];
}

const Branch = ({ children }: BranchProps) => {
  return <div className="branch">{children}</div>;
};

export default Branch;
