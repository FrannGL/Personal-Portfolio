interface RedirectIconProps {
	stroke: string;
}

const RedirectIcon = ({ stroke }: RedirectIconProps) => (
	<svg xmlns='http://www.w3.org/2000/svg' width={25} height={25} fill='none' viewBox='0 0 24 24'>
		<path
			stroke={stroke}
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M21 9V3m0 0h-6m6 0-8 8m-3-6H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 7.28 3 8.12 3 9.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C19 18.72 19 17.88 19 16.2V14'
		/>
	</svg>
);

export default RedirectIcon;