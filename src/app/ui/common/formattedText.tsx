import React from "react";
import { formatText } from "../../lib/utils";

interface FormattedTextProps {
  children: string;
}
interface FormattedParagraphProps {
  children: string;
  className?: string;
}

export function FormattedText({ children }: FormattedTextProps) {
  const processedText = formatText(children);

  return processedText;
}

export function FormattedParagraph({
  children,
  className = "text-4 lg:text-[18px]",
}: FormattedParagraphProps) {
  return children
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph.length > 0)
    .map((paragraph, index) => (
      <p key={`${paragraph[0]}-${index}`} className={className}>
        <FormattedText>{paragraph}</FormattedText>
      </p>
    ));
}
