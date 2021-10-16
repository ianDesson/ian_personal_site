import React from "react";

import WaveTop from "../resources/images/waves/waveTop.svg";
import WaveMiddle from "../resources/images/waves/waveMiddle.svg";
import WaveBottom from "../resources/images/waves/waveBottom.svg";

const Waves = () => (
  <div class="waveWrapper waveAnimation">
    <div class="waveWrapperInner bgTop">
      <div
        class="wave waveTop"
        style={{
          backgroundImage: WaveTop,
        }}
      ></div>
    </div>
    <div class="waveWrapperInner bgMiddle">
      <div
        class="wave waveMiddle"
        style={{
          backgroundImage: WaveMiddle,
        }}
      ></div>
    </div>
    <div class="waveWrapperInner bgBottom">
      <div
        class="wave waveBottom"
        style={{
          backgroundImage: WaveBottom,
        }}
      ></div>
    </div>
  </div>
);

export default Waves;
