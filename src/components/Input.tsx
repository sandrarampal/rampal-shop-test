interface TInputProps {
  type: string;
  placeholder?: string;
  name: string;
}

export default function Input({ type, placeholder, name }: TInputProps) {
  return <input type={type} placeholder={placeholder} name={name} />;
}
