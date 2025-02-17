import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductsInfo from '../components/productsInfo.jsx';

function Detail({ shoes }) {
	const { id } = useParams();
	const shoeId = parseInt(id, 10);
	const shoe = shoes.find((shoe) => shoe.id === shoeId);
	const [alert, setAlert] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setAlert(false);
		}, 2000);
		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<>
			<div className="container detail-content">
				{alert === true ? (
					<div className="alert alert-info">2초 이내 구매시 할인!</div>
				) : null}
				<div className="row">
					<div className="col-md-6">
						<img src={`${shoe.image}`} alt={shoe.title} width="100%" />
					</div>
					<div className="col-md-6">
						<h4 className="pt-5">{shoe.title}</h4>
						<p>{shoe.content}</p>
						<p>{shoe.price}원</p>
						<button className="btn btn-danger">주문하기</button>
					</div>
				</div>
			</div>
			<ProductsInfo />
		</>
	);
}

export default Detail;
