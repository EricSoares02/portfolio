import { SvgProps } from "@/utils/svg.props";

export default function FullArrowSvg({ size, color }: SvgProps) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={color ? color : "#000000"}
        stroke="none"
      >
        <path
          d="M2912 3553 c-62 -30 -96 -114 -78 -190 5 -19 109 -130 314 -335 l306
-308 -1116 -2 c-1110 -3 -1117 -3 -1144 -24 -53 -39 -69 -71 -69 -134 0 -63
16 -95 69 -134 27 -21 34 -21 1144 -24 l1116 -2 -306 -308 c-205 -205 -309
-316 -314 -335 -10 -44 1 -112 24 -145 41 -56 139 -80 200 -48 15 8 230 219
479 468 396 397 452 458 458 491 17 92 31 74 -458 565 -249 249 -464 460 -479
468 -36 19 -105 17 -146 -3z"
        />
      </g>
    </svg>
  );
}
