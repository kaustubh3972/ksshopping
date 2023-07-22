function Footer() {
	return (
		<div className="container">
			<footer className="py-3 ">
				<ul className="nav justify-content-center border-bottom pb-3 mb-3">
					<li className="nav-item">
						<a href="/" className="nav-link px-2 text-body-secondary">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a
							href="/categories"
							className="nav-link px-2 text-body-secondary"
						>
							Category
						</a>
					</li>
					<li className="nav-item">
						<a href="/products" className="nav-link px-2 text-body-secondary">
							Product
						</a>
					</li>
					<li className="nav-item">
						<a href="/basket" className="nav-link px-2 text-body-secondary">
							Basket
						</a>
					</li>
					<li className="nav-item">
						<a href="/contact" className="nav-link px-2 text-body-secondary">
							Contact Us
						</a>
					</li>
				</ul>
				<p className="text-center text-body-secondary">© 2023 K's Shopping</p>
			</footer>
		</div>
	);
}
export default Footer;
