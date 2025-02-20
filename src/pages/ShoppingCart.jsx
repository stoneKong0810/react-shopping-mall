import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCount } from '../store.jsx';

function ShoppingCart() {
	const dispatch = useDispatch();
	const stock = useSelector((state) => state.stock);
	const renderCartRow = (item, index) => {
		return (
			<tr key={index}>
				<td>{item.id}</td>
				<td>{item.name}</td>
				<td>{item.count}</td>
				<td>
					<button
						onClick={() => {
							dispatch(addCount(item.id));
						}}
					>
						+
					</button>
				</td>
			</tr>
		);
	};

	return (
		<Table>
			<thead>
				<tr>
					<th>#</th>
					<th>상품명</th>
					<th>수량</th>
					<th>변경하기</th>
				</tr>
			</thead>
			<tbody>{stock.map(renderCartRow)}</tbody>
		</Table>
	);
}

export default ShoppingCart;
