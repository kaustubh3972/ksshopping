import axios from "axios";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { isMember, loginSuccess } from "./action";
function Login({ mydata, loginSuccess, isMember }) {
	let nav = useNavigate();
	function loginCheck() {
		let s1 = document.getElementById("email").value;
		let s2 = document.getElementById("password").value;
		axios
			.get(process.env.REACT_APP_URL + "members.php?email=" + s1 + "&upass=" + s2)
			.then((reply) => {
				if (reply.data.status != "Empty") {
					loginSuccess("Y");
					isMember(reply.data);
					document.getElementById("email").value = "";
					document.getElementById("password").value = "";
					nav("/categories");
				} else {
					alert("Invalid Login/Password!!!");
				}
			});
	}
	return (
		<div className="container text-center my-4">
			<main className="form-signin w-100 m-auto">
				<h1 className="h3 mb-3 fw-normal">Sign in/Sign up</h1>
				<div className="form-floating col-sm-3 mx-auto">
					<input
						type="email"
						className="form-control "
						id="email"
						placeholder="name@example.com"
					/>
					<label for="email">Email address</label>
				</div>
				<div className="form-floating col-sm-3 mx-auto">
					<input
						type="password"
						className="form-control"
						id="password"
						placeholder="Password"
					/>
					<label for="password">Password</label>
				</div>
				<div className="checkbox my-2">
					<label>
						<input type="checkbox" value="remember-me" /> Remember me
					</label>
				</div>
				<button
					className=" btn  btn-primary mx-2"
					type="submit"
					onClick={loginCheck}
				>
					Sign in
				</button>
				<button className=" btn btn-primary " type="submit">
					Sign up
				</button>
			</main>
		</div>
	);
}
let mapStateToProps = (state) => ({ mydata: state });
let mapFunctions = (dispatch) => ({
	loginSuccess: (value) => dispatch(loginSuccess(value)),
	isMember: (value) => dispatch(isMember(value)),
});
export default connect(mapStateToProps, mapFunctions)(Login);
