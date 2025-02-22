import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductsInfo from '../components/ProductsInfo.jsx';
import { useDispatch } from 'react-redux';
import { addCart } from '../store.jsx';

function Detail({ shoes }) {
	const dispatch = useDispatch();
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

	useEffect(() => {
		let watched = localStorage.getItem('watched');
		watched = JSON.parse(watched);
		watched.push(shoe.id);
		watched = new Set(watched);
		watched = Array.from(watched);
		localStorage.setItem('watched', JSON.stringify(watched));
	});

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
