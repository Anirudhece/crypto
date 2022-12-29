import React, { useState } from "react"; //* as
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function SliderSizes(props) {
	function handleChange(e) {
		setSliderValue(e.target.value);
	}

	const [sliderValue, setSliderValue] = useState(20); //20 being our default value
	props.dataFromSlider(sliderValue);
	// console.log(sliderValue);
	return (
		<>
			<div className="SliderSizesContainer">
				<div className="SliderSizesContainer--wrapper">
					<div className="SliderSizesContainer---text">
						Slide to the max number of coins you wanna see:
					</div>
					<br />
					<Box className="SliderSizesContainer---box" width={150}>
						<Slider
							// min={10},
							// max={110},
							size="small"
							value={sliderValue}
							aria-label="Default"
							valueLabelDisplay="auto"
							onChange={handleChange}
						/>
					</Box>
				</div>
			</div>
		</>
	);
}
