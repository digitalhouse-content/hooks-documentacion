import React from "react";

export const ChildComponent = React.memo(({onClick}) => {
	console.log("Renderizado hijo");

	return <button onClick={onClick}>Increment</button>;
});
