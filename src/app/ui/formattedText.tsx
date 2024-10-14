import React from "react";
import { formatText } from "../lib/utils";

interface FormattedTextProps {
  children: string;
}

const FormattedText: React.FC<FormattedTextProps> = ({ children }) => {
  const processedText = formatText(children);

  return processedText;
};

export default FormattedText;
