import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductsInfo from '../components/ProductsInfo.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../store.jsx';

function Detail({ shoes }) {
	const dispatch = useDispatch();
	const stock = useSelector((state) => state.stock);
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

	const addToCart = () => {
		dispatch(
			addCart({
				id: shoe.id,
				name: shoe.title,
			})
		);
	};

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
						<button className="btn btn-danger" onClick={addToCart}>
							주문하기
						</button>
					</div>
				</div>
			</div>
			<ProductsInfo shoes={shoes} />
		</>
	);
}

export default Detail;
