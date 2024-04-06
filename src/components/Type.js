import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Retratos",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 500,
      }}
    />
  );
}

export default Type;
