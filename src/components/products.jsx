function Products({ shoes }) {
	const renderShoe = (shoe, index) => (
		<div className="col-md-4 text-center" key={index}>
			<img src={shoe.image} alt={shoe.name} />
			<h4>{shoe.title}</h4>
			<p>{shoe.content}</p>
		</div>
	);

	return <div className="row">{shoes.map(renderShoe)}</div>;
}

export default Products;
