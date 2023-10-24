function FilterIcon(props: React.SVGAttributes<HTMLElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height={props.height || '24'}
			viewBox='0 -960 960 960'
			fill={props.fill || 'currentColor'}
			width={props.width || '24'}>
			<path d='M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z' />
		</svg>
	);
}

export default FilterIcon;
