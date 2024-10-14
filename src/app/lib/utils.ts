import Typograf from "typograf";

const tp = new Typograf({ locale: ["ru", "en-US"] });

tp.enableRule("ru/nbsp/afterShortWord");

export function formatText(text: string): string {
  return tp.execute(text);
}
