import { ReactNode } from "react";

interface LinearHeaderProps {
  children: ReactNode;
}

export default function LinearGradient({ children }: LinearHeaderProps) {
  return <div className="linear-header">{children}</div>;
}
