import axios from "axios";
import { useEffect, useState } from "react";

function BasketItem(mydata) {
	let [item, setItem] = useState([]);
	let [qty, setQty] = useState();
	function showItems() {
		axios
			.get(process.env.REACT_APP_URL + "products.php?pid=" + mydata.id)
			.then((reply) => {
				setItem(reply.data);
				changeQuantity(item.pid);
			});
	}
	// alert("check" + item.pid);
	// alert("check" + mydata.basket);
	function changeQuantity(mypid) {
		item.map((element) => {
			if (
				item.pid ==
				mydata.basket.find((e) => {
					if (e == item.pid) {
						return e;
					}
				})
			) {
				alert("Already in Basket" + mypid);
			} else {
				alert("mydata.basket.length=" + mydata.basket.length);
				alert("new item, id=" + mypid);
			}
			// let b = event.target;
			// if (b.value == mydata.id) {
			// 	setQty(qty++);
			// } else {
			// 	alert("error");
			// }
			// alert("mydata == mydata.id :" + b.value);
			return { qty };
		});
	}
	useEffect(() => {
		showItems();
	}, []);
	return (
		<tr>
			<td>
				<img src={item.photo} style={{ width: "150px" }} />
			</td>
			<td>{item.pname} </td>
			<td>{item.details}</td>
			<td>{item.price}</td>
			<td>{qty}</td>
			<td>{item.price}</td>
		</tr>
	);
}
export default BasketItem;
