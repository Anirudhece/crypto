import React from "react";
import "./MainComponents.scss";
export default function SingleData(props) {
	// console.log(props.data);
	return (
		<>
			<div className="horizontalContainer">
				<img src={props.data.image} alt="coimImage" />
				<div title="Coin Name" className="horizontalContainer--coinName">
					{props.data.name}
				</div>
				<div title="symbol" className="horizontalContainer--symbol">
					{props.data.symbol}
				</div>
				<div
					title="current price"
					className="horizontalContainer--current_price"
				>
					${props.data.current_price}
				</div>
				<div title="24hrs high" className="horizontalContainer--high_24h">
					${props.data.high_24h}
				</div>
				<div title="24hrs low" className="horizontalContainer--low_24h">
					${props.data.low_24h}
				</div>
				<div
					title="total volume"
					className="horizontalContainer--total_volume"
				>
					${props.data.total_volume}
				</div>

				<div
					title="percentge"
					className="horizontalContainer--price_change_percentage_24h"
					style={{
						color:
							props.data.price_change_percentage_24h < 0
								? "red"
								: "#228B22"
					}}
				>
					{props.data.price_change_percentage_24h}%
				</div>
			</div>
		</>
	);
}
