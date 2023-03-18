import React, { useState, useEffect } from "react";
import "./Components.scss";
import axios from "axios";
import SingleData from "./MainComponents/SingleData";
import SliderSizes from "./MainComponents/SliderInputMaterial";
export default function Main() {
	const currency = "usd";
	const [numberOfcoins, setnumberOfcoins] = useState("");

	function handleDataFromSlider(sliderValue) {
		setnumberOfcoins(sliderValue.toString());
	}

	const [data, setData] = useState([]);

	useEffect(() => {
		/*if (numberOfcoins)*/

		async function fetchData() {
			const result = await axios.get(
				`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${numberOfcoins}&page=1&sparkline=false`
			);
			setData(result.data);
		}
		fetchData();
	}, []); //numberOfcoins

	if (data.length === 0) {
		return <div>loader</div>;
	}

	return (
		<>	
			<div className="message">
				<div>
				  Please open this page on a wider screen (e.g. computer) for the best
				  experience.
				</div>
      			</div>
			<div className="mainContainer">
				<div className="mainContainer--line"></div>
				<SliderSizes dataFromSlider={handleDataFromSlider} />
				<div className="mainContainer--currencydisplay">
					{data.map((item, index) => {
						return <SingleData key={item.id} data={item} />;
					})}
				</div>
			</div>
		</>
	);
}
