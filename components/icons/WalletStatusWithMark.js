import * as React from "react";

const SvgWalletStatusWithMark = (props) => (
  <svg
    width={55}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse cx={21.997} cy={26.253} rx={21.497} ry={20.753} fill="#585858" />
    <path
      d="m20.022 31.657-5.637-5.338 1.53-1.468 4.107 4.003 8.283-8.006 1.531 1.468-9.814 9.34Z"
      fill="#807e7e"
    />
    <path
      d="m47.076 10.532.336-.432 1.128-2.352.096-.96h.336l.12.96L50.22 10.1l.312.432 2.52-1.752-.312-.432-1.872-1.824-.888-.384.096-.336.936.216 2.592-.336.528-.168-1.008-3.024-.48.168-2.304 1.248-.648.72-.288-.24.48-.792.456-2.592V.5h-3.072v.504l.48 2.592.48.792-.312.24-.648-.72-2.28-1.248-.504-.168-.984 3.024.504.168 2.592.336.96-.216.072.336-.864.384-1.896 1.824-.288.432 2.496 1.752Z"
      fill="#FF5E18"
    />
  </svg>
);

export default SvgWalletStatusWithMark;
