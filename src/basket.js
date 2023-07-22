import { connect } from "react-redux";
import BasketItem from "./basketItem";

function Basket({ mydata }) {
	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th>Item</th>
					<th>Name</th>
					<th>Details</th>
					<th>Price</th>
					<th>Qty</th>
					<th>Amount</th>
				</tr>
			</thead>
			<tbody>
				{mydata.basket.map((pid) => (
					<BasketItem id={pid} />
				))}
			</tbody>
		</table>
	);
}
let mapStateToProps = (state) => ({ mydata: state });
export default connect(mapStateToProps)(Basket);
