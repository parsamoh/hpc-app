import { useState } from "react";
import "./App.css";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

function App() {
  const [sliderValue, setSliderValue] = useState(8);

  return (
    <div style={{ width: "500px" }}>
      <Slider
        defaultValue={sliderValue}
        min={8}
        max={50}
        step={1}
        onChange={setSliderValue}
      >
        <SliderMark
          value={sliderValue}
          textAlign="center"
          mt="-10"
          ml="-5"
          w="12"
        >
          {sliderValue} GB
        </SliderMark>
        <SliderTrack bg="red.100">
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
    </div>
  );
}

export default App;
