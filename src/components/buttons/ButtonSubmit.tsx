interface TButtonSubmit {
  content: string;
}

const ButtonSubmit = ({ content }: TButtonSubmit) => {
  return (
    <button className="px-4 py-2 bg-purple-900 text-white rounded hover:bg-gray-200 hover:text-black transition-colors duration-300 cursor-pointer mt-2">
      {content}
    </button>
  );
};

export default ButtonSubmit;
