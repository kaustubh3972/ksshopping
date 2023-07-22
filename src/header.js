import { Link } from "react-router-dom";
import logo from "./images/logo.jpg";
import { connect } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header({ mydata }) {
	function beforeLogin() {
		return (
			<>
				{/* EMPTY BRACKETS ARE USED FOR PREVENTING JSX ERROR */}
				<li className="nav-item active">
					<Link className="nav-link" to="/register">
						Register
					</Link>
				</li>
				<li className="nav-item active">
					<Link className="nav-link" to="/login">
						Login
					</Link>
				</li>{" "}
			</>
		);
	}
	function afterLogin() {
		return (
			<>
				<li className="nav-item active">
					<Link className="nav-link" to="/profile">
						My Profile
					</Link>
				</li>
				<li className="nav-item active">
					<Link className="nav-link" to="/logout">
						Logout
					</Link>
				</li>{" "}
			</>
		);
	}
	return (
		<nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<img src={logo} style={{ width: "70px" }} />
				</Link>
				<Link className="navbar-brand" to="/">
					{/* name */}
				</Link>
				{/* BUGER ICON FOR RESPONSIVENESS */}
				<button
					className="navbar-toggler "
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/categories">
								Category
							</Link>
						</li>
						<li className="nav-item active">
							<Link className="nav-link" to="/products">
								Products
							</Link>
						</li>
						<li className="nav-item active">
							<Link className="nav-link" to="/basket">
								Basket
							</Link>
						</li>
						{mydata.isLogin == "N" ? beforeLogin() : afterLogin()}
						<li className="nav-item active">
							<Link className="nav-link" to="/contact">
								Contact Us
							</Link>
						</li>
					</ul>
					<form className="d-flex" role="search">
						<input
							className="form-control me-2 bg-light"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-success btn-sm"
							type="no-change"
							disabled
						>
							Search
						</button>
					</form>
					<div className="navbar-brand mx-4">
						Total Items: {mydata.basket.length}
						{/* <i class="fa-regular fa-cart-shopping"></i>
						<i
							class="fa-sharp fa-regular fa-cart-shopping"
							style={{ color: "#fff45f" }}
						></i>
						<FontAwesomeIcon icon="fa-light fa-cart-shopping" /> */}
						<br />
						Cart Value:Rs {mydata.total}/-
					</div>
				</div>
			</div>
		</nav>
	);
}
let mapStateToProps = (state) => ({ mydata: state });
export default connect(mapStateToProps)(Header);
