import Products from '../components/products.jsx';
import axios from 'axios';
import { useState } from 'react';

function Main({ shoes, setShoes }) {
	const [showMoreCount, setShowMoreCount] = useState(1);
	const handleShowMore = () => {
		if (showMoreCount < 3) {
			setShowMoreCount(showMoreCount + 1);
			axios
				.get(
					`https://codingapple1.github.io/shop/data${showMoreCount + 1}.json`
				)
				.then((addShoe) => {
					setShoes(shoes.concat(addShoe.data));
				});
		} else {
			alert('더이상 상품이 없습니다.');
		}
	};

	return (
		<>
			<div className="main-bg"></div>
			<div className="container main-content">
				<div className="row justify-content-center">
					{<Products shoes={shoes} />}
				</div>
				<button className="btn btn-outline-danger" onClick={handleShowMore}>
					더보기
				</button>
			</div>
		</>
	);
}

export default Main;
