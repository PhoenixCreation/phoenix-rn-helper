import * as React from "react";
import Svg, { Path } from "react-native-svg";

function TouchSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 2"
      viewBox="0 0 62 62"
      {...props}
    >
      <Path
        d="M48.83 28.17A4 4 0 0046 27a3.94 3.94 0 00-2.22.68 4.07 4.07 0 00-1-1.51A4 4 0 0040 25a3.94 3.94 0 00-2.22.68 4.07 4.07 0 00-1-1.51 4 4 0 00-4.78-.63V14a4 4 0 00-1.17-2.83 4.05 4.05 0 00-3.64-1.09A4.11 4.11 0 0024 14.15v23.19l-2.74-3.13a5 5 0 00-6.87-.61l-.69.56A2.93 2.93 0 0013 38l7.13 11.5A16.35 16.35 0 0034 58a16 16 0 0016-16V31a4 4 0 00-1.17-2.83zM48 42a14 14 0 01-14 14c-4.74 0-9.51-2.94-12.15-7.52l-7.11-11.55a.92.92 0 01.26-1.21l.68-.56a3 3 0 011.87-.66 3 3 0 012.25 1l6.2 7.16V14.15A2.1 2.1 0 0127.58 12a2 2 0 011.83.55A2 2 0 0130 14v20a1 1 0 002 0v-7a2 2 0 012-2 2 2 0 012 2v7a1 1 0 002 0v-5a2 2 0 012-2 2 2 0 012 2v5a1 1 0 002 0v-3a2 2 0 012-2 2 2 0 012 2z"
        // stroke="black"
        fill={props.handColor ? props.handColor : "white"}
        strokeWidth={1}
      />
    </Svg>
  );
}

export default TouchSvg;
