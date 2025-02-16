import { useParams } from 'react-router-dom';

function Detail({ shoes }) {
	const { id } = useParams();
	const shoeId = parseInt(id, 10);
	const shoe = shoes.find((shoe) => shoe.id === shoeId);

	return (
		<div className="container">
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
	);
}

export default Detail;
