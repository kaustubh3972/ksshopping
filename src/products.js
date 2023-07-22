import axios from "axios";
import { useEffect, useState } from "react";
import addtocart from "./images/addtocart.jpg";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { setTotal, addToBasket } from "./action";
function Products({ mydata, addToBasket, setTotal }) {
	let [proData, setProData] = useState([]);
	let pp = useParams();
	function getProducts() {
		console.log("hi" + pp.cid);
		axios.get(process.env.REACT_APP_URL + "products.php").then((reply) => {
			if (pp.cid == undefined) {
				setProData(reply.data);
			} else {
				setProData(reply.data.filter((p) => p.cid == pp.cid));
			}
		});
	}
	function addItemInBasket(pid, price) {
		setTotal(price);
		// alert("pid of product in basket" + pid);
		itemInBasketCheck(pid);
	}
	function itemInBasketCheck(pid) {
		if (
			pid ==
			mydata.basket.find((e) => {
				if (e == pid) {
					return e;
				}
			})
		) {
			alert("This product is already in Basket");
		} else {
			// alert("mydata.basket.length=" + (mydata.basket.length + 1));
			// alert("new item, id=" + pid);
		}
		addToBasket(pid);
	}
	useEffect(() => {
		getProducts();
	}, []);
	return (
		<div className="row align-items-end g-0">
			{proData.map((element) => (
				<div
					className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
					style={{ textAlign: "center", cursor: "pointer" }}
				>
					<img src={element.photo} />
					<br />
					{element.pname}
					<br />
					{element.details}
					<br />
					Rs {element.price}/-
					<br />
					<img
						className="btn btn-light"
						src={addtocart}
						style={{ width: "150px", cursor: "pointer" }}
						onClick={() => {
							addItemInBasket(element.pid, element.price);
						}}
					/>
				</div>
			))}
		</div>
	);
}
let mapStateToProps = (state) => ({ mydata: state });
let mapFunctions = (dispatch) => ({
	setTotal: (value) => dispatch(setTotal(value)),
	addToBasket: (value) => dispatch(addToBasket(value)),
});
export default connect(mapStateToProps, mapFunctions)(Products);
