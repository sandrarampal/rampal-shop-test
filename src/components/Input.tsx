interface TInputProps {
  type: string;
  placeholder?: string;
  name: string;
}

export default function Input({ type, placeholder, name }: TInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-purple-400"
    />
  );
}
