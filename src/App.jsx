import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import shoesData from './data/data.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail.jsx';
import Main from './pages/Main.jsx';
import Cart from './pages/Cart.jsx';

function App() {
	const [shoes, setShoes] = useState(shoesData);
	const navigate = useNavigate();

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
				</Container>
			</Navbar>

			<Routes>
				<Route path="*" />
				<Route path="/" element={<Main shoes={shoes} setShoes={setShoes} />} />
				<Route path="/detail/:id" element={<Detail shoes={shoes} />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</>
	);
}

export default App;
