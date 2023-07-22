import Categories from "./categories";
import Footer from "./footer";
import Header from "./header";
import { Route, Routes } from "react-router";
import Products from "./products";
import Basket from "./basket";
import Contact from "./contact";
import Register from "./register";
import Login from "./login";
function App() {
	return (
		<div className="App">
			<Header />
			<div className="container border-bottom">
				<Routes>
					<Route path="/" element={<Categories />}></Route>
					<Route path="/categories" element={<Categories />}></Route>
					<Route path="/products/:cid" element={<Products />}></Route>
					<Route path="/products" element={<Products />}></Route>
					<Route path="/basket" element={<Basket />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="/register" element={<Register />}></Route>
					<Route path="/login" element={<Login />}></Route>
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
