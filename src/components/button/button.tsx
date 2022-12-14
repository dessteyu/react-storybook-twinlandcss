
interface ButtonProps {
  label?: string;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
    return <button className="text-gray-700 p-1 bg-red-200">{props.label}</button>;
}