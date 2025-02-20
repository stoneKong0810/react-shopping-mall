import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

function ProductsInfo({ shoes }) {
	const [tab, setTab] = useState(0);

	return (
		<>
			<Nav variant="tabs" fill defaultActiveKey="link0">
				<Nav.Item>
					<Nav.Link
						onClick={() => {
							setTab(0);
						}}
						eventKey="link0"
					>
						상세 정보
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						onClick={() => {
							setTab(1);
						}}
						eventKey="link1"
					>
						판매자 정보
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						onClick={() => {
							setTab(2);
						}}
						eventKey="link2"
					>
						리뷰
					</Nav.Link>
				</Nav.Item>
			</Nav>
			<TabContent tab={tab} shoes={shoes} />
		</>
	);
}

function TabContent({ tab, shoes }) {
	return [
		<div key={0}>{shoes[0].title}</div>,
		<div key={1}>내용1</div>,
		<div key={2}>내용2</div>,
	][tab];
}

export default ProductsInfo;
