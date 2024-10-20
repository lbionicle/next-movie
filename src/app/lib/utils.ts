import Typograf from "typograf";

const tp = new Typograf({ locale: ["ru", "en-US"] });

tp.enableRule("ru/nbsp/afterShortWord");

export function formatText(text: string): string {
  return tp.execute(text);
}

export function getHours(minutes: number) {
  return Math.floor(minutes / 60);
}

export function getMinutes(minutes: number) {
  return minutes - getHours(minutes) * 60;
}

export function transformRating(rating: number) {
  const sRating = rating.toString();
  return sRating.replace(".", ",") + (sRating.length === 1 ? ",0" : "");
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getYouTubeVideoId(url: string): string {
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
    return url;
  }

  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match && match[1] ? match[1] : "";
}
