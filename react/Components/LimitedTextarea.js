function LimitedTextarea({ rows, cols, value, limit }) {
	const [ content, setContent ] = React.useState(value);

	const setFormattedContent = (text) => {
		text.length > limit ? setContent(text.slice(0, limit)) : setContent(text);
	};

	React.useEffect(() => {
		setFormattedContent(content);
	}, []);

	return (
		<div>
			<textarea rows={rows} cols={cols} onChange={(event) => setFormattedContent(event.target.value)} value={content} />
			<p>
				{content.length}/{limit}
			</p>
		</div>
	);
}

ReactDOM.render(<LimitedTextarea limit={32} value='Hello!' />, document.getElementById('root'));
