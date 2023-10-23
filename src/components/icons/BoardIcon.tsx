import { SvgIconProps } from ".";

export default function BoardIcon({ height, width, color }: SvgIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="3"
      // change stroke on
      stroke={color || "#141414"}
      fill="none"
      className=""
    >
      <circle cx="31.89" cy="22.71" r="5.57" />
      <path d="M43.16,43.74A11.28,11.28,0,0,0,31.89,32.47h0A11.27,11.27,0,0,0,20.62,43.74Z" />
      <circle cx="48.46" cy="22.71" r="5.57" />
      <path d="M46.87,43.74H59.73A11.27,11.27,0,0,0,48.46,32.47h0a11.24,11.24,0,0,0-5.29,1.32" />
      <circle cx="15.54" cy="22.71" r="5.57" />
      <path d="M17.13,43.74H4.27A11.27,11.27,0,0,1,15.54,32.47h0a11.24,11.24,0,0,1,5.29,1.32" />
    </svg>
  );
}
