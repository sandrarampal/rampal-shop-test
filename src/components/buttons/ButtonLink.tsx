import { Link } from "react-router-dom";

interface TButtonProps {
  content: string;
  path: string;
}

const ButtonLink = ({ content, path }: TButtonProps) => {
  return (
    <Link to={path}>
      <button className="px-4 py-2 bg-purple-900 text-white rounded hover:bg-gray-200 hover:border hover:text-black transition-colors duration-300 cursor-pointer">
        <p>{content}</p>
      </button>
    </Link>
  );
};

export default ButtonLink;
