interface TButtonSubmit {
  content: string;
}

const ButtonSubmit = ({ content }: TButtonSubmit) => {
  return <button>{content}</button>;
};

export default ButtonSubmit;
