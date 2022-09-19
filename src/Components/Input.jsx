//Complete the custom Input component based on the props that it expects to receive
import { useState } from "react";
import "./Input.css";

export const Input = ({
	type = "text",
	size = "md",
	variant,
	value,
	onChange,
}) => {
	const [values, setValues] = useState(value);
	return (
		<input
			className={`${size || "sm" || "lg" || "xl"} ${
				variant || "outline" || "filled" || "flushed"
			}`}
			type={type}
			value={value}
			onChange={setValues((prev) => prev + values)}
		/>
	);
};
