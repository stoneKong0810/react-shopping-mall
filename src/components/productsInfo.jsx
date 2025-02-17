import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

function ProductsInfo() {
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
			<TabContent tab={tab} />
		</>
	);
}

function TabContent({ tab }) {
	switch (tab) {
		case 0:
			return <div>상세 정보</div>;
		case 1:
			return <div>판매자 정보</div>;
		case 2:
			return <div>리뷰</div>;
	}
}

export default ProductsInfo;
