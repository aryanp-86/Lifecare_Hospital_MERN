import { useState } from "react";
import { message, Space } from 'antd';
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import React from "react";



const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");


	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/auth/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
	const success = () => {

		message.success('Login successfull!!');
		
	
	  };

	return (
		<>
		<div className="text-center">
			
		</div>
		
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}  style={{"backgroundImage": "url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm373batch15-217-01.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d8bbc66e02e81095950de55fcc9347f5')",  "backgroundRepeat": "repeat", "backgroundSize": "100%"}}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1><b>Login to Your Account</b></h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<Space>
						<button type="submit" onClick={success} className={styles.green_btn}>
							Sign In
						</button>
						</Space>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
		
		</>
	);
};

export default Login;