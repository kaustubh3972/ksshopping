import axios from "axios";
import { useEffect, useState } from "react";
import moreproducts from "./images/moreproducts.jpg";
import { useNavigate } from "react-router";
function Categories() {
	let [catData, setCatData] = useState([]);
	let nav = useNavigate();
	function getCategory() {
		axios.get(process.env.REACT_APP_URL + "categories.php").then((reply) => {
			setCatData(reply.data);
		});
	}
	function getProducts(cid) {
		nav("/products/" + cid);
	}
	useEffect(() => {
		getCategory();
	}, []);
	return (
		<div className="row align-items-end g-0">
			<i class="fa-regular fa-cart-shopping"></i>
			{catData.map((element) => (
				<div
					className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
					style={{
						textAlign: "center",
						padding: "0",
						cursor: "pointer",
						marginTop: "10px",
					}}
				>
					<div>
						<img
							src={element.photo}
							onClick={() => {
								getProducts(element.cid);
							}}
						/>
						<br />
						{element.name}
						<br />
						{element.details}
						<br />
					</div>
					<div>
						<img
							className="col btn btn-light"
							src={moreproducts}
							style={{
								width: "150px",
								cursor: "pointer",
								marginTop: "10px",
							}}
							onClick={() => {
								getProducts(element.cid);
							}}
						/>
					</div>
				</div>
			))}
		</div>
	);
}
export default Categories;
