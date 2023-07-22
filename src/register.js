import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Register() {
	let [country, setCountry] = useState([]);
	let [states, setStates] = useState([]);
	let url = process.env.REACT_APP_URL;
	function getCountry() {
		axios.get(url + "countries.php").then((reply) => {
			setCountry(reply.data);
		});
	}
	function getStates(event) {
		let c = event.target.value;
		axios.get(url + "states.php?isoname=" + c).then((reply) => {
			setStates(reply.data);
		});
	}
	let nav = useNavigate();
	function registerCheck() {
		let s1 = document.getElementById("r1").value;
		let s2 = document.getElementById("r2").value;
		let s3 = document.getElementById("r3").value;
		let s4 = document.getElementById("r4").value;
		let s5 = document.getElementById("r5").value;
		let s6 = document.getElementById("r6").value;
		let s7 = document.getElementById("r7").value;
		let s8 = document.getElementById("r8").value;
		let s9 = document.getElementById("r9").value;
		let s10 = document.getElementById("r10").value;
		// EMAIL
		let n = s1.length;
		let at = s1.indexOf("@") + 1;
		let dot = s1.lastIndexOf(".") + 1;
		if (s1 == "" || at < 2 || n - dot < 2 || dot - at < 4) {
			alert("Invalid Email!!!");
			document.getElementById("r1").focus();
			return;
		}
		// PASSWORD
		if (s2 == "") {
			alert("Password is required");
			document.getElementById("r2").focus();
		}
		let print = new Password();
		for (let i = 0; i < common.length; i++) {
			if (s2.includes(special[i]) && s2.length > 7) {
				print.veryStrongPass();
				break;
			} else if (s2 == common[i]) {
				print.commonPass();
				break;
			} else if (s2.length > 7) {
				print.strongPass();
			} else if (s2.length <= 7) {
				print.weakPass();
				break;
			}
		}

		// CONFIRM PASSWORD
		if (s3 != s2) {
			alert("Passwords do not match!!!");
			document.getElementById("r3").focus();
			return;
		}
		// NAME
		if (s4 == "") {
			alert("Name is required");
			document.getElementById("r4").focus();
			return;
		}
		if (s5 == "") {
			alert("Mobile no. is required");
			document.getElementById("r5").focus();
			return;
		}
		let obj = {
			email: s1,
			upass: s2,
			fname: s4,
			country: s7,
			address: s6,
			mobile: s5,
			state: s8,
			city: s9,
			pincode: s10,
		};
		let json = JSON.stringify(obj);
		axios.post(url + "members.php", json).then((reply) => {
			if ((reply.status = "OK")) {
				alert("You have registered successfully");
				clearAll();
				nav("/login");
			} else {
				alert("check");
			}
		});
	}
	function clearAll() {
		document.getElementById("r1").value = "";
		document.getElementById("r2").value = "";
		document.getElementById("r3").value = "";
		document.getElementById("r4").value = "";
		document.getElementById("r5").value = "";
		document.getElementById("r6").value = "";
		document.getElementById("r7").value = "";
		document.getElementById("r8").value = "";
		document.getElementById("r9").value = "";
		document.getElementById("r10").value = "";
	}
	let pass = document.getElementById("pass");
	class Password {
		strongPass() {
			pass.innerHTML = `<p style="color:green">Strong Password</p>`;
		}
		weakPass() {
			pass.innerHTML = `<p style="color:red">Weak Password:Min length 8</p>`;
		}
		veryStrongPass() {
			pass.innerHTML = `<p style="color:darkgreen">Very Strong Password</p>`;
		}
		commonPass() {
			pass.innerHTML = `<p style="color:orange">Common Password</p>`;
		}
	}
	let special = [
		"~",
		"`",
		"!",
		"@",
		"#",
		"$",
		"%",
		"^",
		"&",
		"*",
		"(",
		")",
		"{",
		"}",
		"[",
		"]",
		"|",
		",",
		".",
		"?",
	];
	let common = [
		"123456",
		"123456789",
		"Qwerty",
		"Password",
		"12345",
		"12345678",
		"111111",
		"1234567",
		"123123",
		"Qwerty123",
		"1q2w3e",
		"1234567890",
		"DEFAULT",
		"0",
		"Abc123",
		"654321",
		"123321",
		"Qwertyuiop",
		"Iloveyou",
		"666666",
		"admin",
		"password",
	];
	useEffect(() => {
		getCountry();
	}, []);
	return (
		<div className="container my-2 ">
			<h2 className="text-center">Register</h2>
			<table className="mx-auto">
				<tr>
					<td>
						<div class="col-auto">
							<label for="r1" class="form-label">
								Email address
							</label>
						</div>
					</td>
					<td>
						<div class="col-auto">
							<input
								type="email"
								class="form-control"
								id="r1"
								aria-describedby="emailHelp"
							/>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="col-auto ">
							<label for="r2" class="col-form-label">
								Password
							</label>
						</div>
					</td>
					<td>
						<div class="col-auto">
							<input
								type="password"
								id="r2"
								class="form-control"
								aria-labelledby="passwordHelpInline"
							/>
						</div>
						<div id="pass"></div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="col-auto">
							<label for="r3" class="col-form-label">
								Confirm Password
							</label>
						</div>
					</td>
					<td>
						<div class="col-auto">
							<input
								type="password"
								class="form-control"
								id="r3"
								aria-labelledby="passwordHelpInline"
							/>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="col-auto">
							<label for="r4" class="col-form-label">
								Name
							</label>
						</div>
					</td>
					<td>
						<div class="col-auto">
							<input
								type="text"
								id="r4"
								class="form-control"
								aria-labelledby="passwordHelpInline"
							/>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="col-auto">
							<label for="r5" class="col-form-label">
								Mobile No.
							</label>
						</div>
					</td>
					<td>
						<div class="col-auto">
							<input
								type="number"
								id="r5"
								class="form-control"
								aria-labelledby="passwordHelpInline"
							/>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="col-auto">
							<label for="r6" class="col-form-label">
								Address
							</label>
						</div>
					</td>
					<td>
						<div class="col-auto">
							<input
								type="text"
								id="r6"
								class="form-control"
								aria-labelledby="passwordHelpInline"
							/>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="col-auto">
							<label for="r7" class="col-form-label">
								Country
							</label>
						</div>
					</td>
					<td>
						<div class="col-auto">
							<select className="form-control" id="r7" onChange={getStates}>
								<option>Select Country</option>
								{country.map((element) => (
									<option value={element.isoname}>
										{element.cname}
									</option>
								))}
							</select>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="col-auto">
							<label for="r8" class="col-form-label">
								State
							</label>
						</div>
					</td>
					<td>
						<div class="col-auto">
							<select className="form-control" id="r8">
								<option>Select State</option>
								{states.map((element) => (
									<option>{element.sname}</option>
								))}
							</select>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="col-auto">
							<label for="r9" class="col-form-label">
								City
							</label>
						</div>
					</td>
					<td>
						<div class="col-auto">
							<input
								type="text"
								class="form-control"
								id="r9"
								aria-labelledby="passwordHelpInline"
							/>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="col-auto">
							<label for="r10" class="col-form-label">
								Pincode
							</label>
						</div>
					</td>
					<td>
						<div class="col-auto">
							<input
								type="number"
								class="form-control"
								id="r10"
								aria-labelledby="passwordHelpInline"
							/>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<button
							type="submit"
							class="btn btn-primary "
							onClick={registerCheck}
						>
							Submit
						</button>
					</td>
					<td>
						<button type="clear" class="btn btn-primary ">
							Clear All
						</button>
					</td>
				</tr>
			</table>
		</div>
	);
}
export default Register;
