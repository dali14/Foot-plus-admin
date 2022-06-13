import React, { useState } from 'react';
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import axios from "axios";



const Login=()=>{

    
    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://62.210.130.244:3004/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.accessToken);
			window.location = "/dash";
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
    return(
        <div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Admin Dashboard</h1>
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
						<Link to="/forgot-password" style={{ alignSelf: "flex-start" }}>
							<p style={{ padding: "0 15px" }}>Forgot Password ?</p>
						</Link>
                        
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
                        <Link to="/signup">
                        <button type="submit" className={styles.green_btn}>
							Sing UP
						</button>
                        </Link>
					</form>
				</div>
				
			</div>
		</div>
    )
}

export default Login