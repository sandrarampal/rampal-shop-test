import { Link } from "react-router-dom";

interface TButtonProps {
  content: string;
  path: string;
}

const ButtonLink = ({ content, path }: TButtonProps) => {
  return (
    <Link to={path}>
      <button className="bg-green-300 p-3 rounded-lg cursor-pointer">
        <p>{content}</p>
      </button>
    </Link>
  );
};

export default ButtonLink;
