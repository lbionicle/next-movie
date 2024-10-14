interface HeartIconProps {
  isDark?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

export default function HeartIcon({
  isDark = false,
  width = 30,
  height = 30,
  className = "",
}: HeartIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.34 6.19076C8.9675 6.19076 7.59625 6.68701 6.55125 7.68076C5.55125 8.63326 5 9.89701 5 11.2395C5 12.5808 5.55125 13.8445 6.55125 14.797L15 22.837L23.4487 14.797C24.4487 13.8445 25 12.5808 25 11.2395C25 9.89826 24.4487 8.63326 23.4487 7.68076C21.36 5.69326 17.96 5.69326 15.8712 7.68076L15 8.51076L14.1287 7.68076C13.0837 6.68701 11.7125 6.19076 10.34 6.19076ZM15 26.2495L4.80875 16.5508C3.32 15.1345 2.5 13.2483 2.5 11.2395C2.5 9.23076 3.32 7.34451 4.80875 5.92701C7.58375 3.28576 11.94 3.04826 15 5.21076C18.06 3.04826 22.4163 3.28576 25.1912 5.92701C26.68 7.34451 27.5 9.23076 27.5 11.2395C27.5 13.2483 26.68 15.1345 25.1912 16.5508L15 26.2495Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={isDark ? "#171717" : "#FFFFFF"}
        fillOpacity="1"
      />
    </svg>
  );
}
