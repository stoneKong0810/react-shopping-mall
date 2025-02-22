import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import shoesData from './data/data.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail.jsx';
import Default from './pages/Default.jsx';
import Cart from './pages/ShoppingCart.jsx';
import { useQuery } from 'react-query';
import axios from 'axios';

function App() {
	const [shoes, setShoes] = useState(shoesData);
	const navigate = useNavigate();

	useEffect(() => {
		localStorage.setItem('watched', JSON.stringify([]));
	}, []);

	const getName = useQuery('name', () => {
		return axios
			.get('https://codingapple1.github.io/userdata.json')
			.then((res) => {
				return res.data;
			});
	});

	return (
		<>
			<Navbar bg="light" data-bs-theme="light">
				<Container>
					<Navbar.Brand>Shoe Shop</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link
							onClick={() => {
								navigate('/');
							}}
						>
							Home
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								navigate('/detail');
							}}
						>
							Detail
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								navigate('/cart');
							}}
						>
							Cart
						</Nav.Link>
					</Nav>
					<Nav className="ms-auto">
						반가워요. {getName.isLoading ? '로딩중' : getName.data.name}
					</Nav>
				</Container>
			</Navbar>

			<Routes>
				<Route path="*" />
				<Route
					path="/"
					element={<Default shoes={shoes} setShoes={setShoes} />}
				/>
				<Route path="/detail/:id" element={<Detail shoes={shoes} />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</>
	);
}

export default App;
