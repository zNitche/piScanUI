import { SVGAttributes } from "react";

export default function CloseIcon(props: SVGAttributes<SVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24"
			viewBox="0 -960 960 960"
			width="24"
			{...props}
		>
			<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
		</svg>
	);
}
