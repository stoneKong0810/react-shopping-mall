import Products from '../components/products.jsx';

function Main({ shoes }) {
	return (
		<>
			<div className="main-bg"></div>
			<div className="container main-content">
				<div className="row">{<Products shoes={shoes} />}</div>
			</div>
		</>
	);
}

export default Main;
