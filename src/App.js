import { Route, Routes, Navigate, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Main from "./Components/Main/index";
import Signup from "./Components/Signup/index";
import Login from "./Components/Login/index";
import Contact from "./Components/Contact";
import Dashboard from "./Components/pages/Dashboard";
function App() {
	const user = localStorage.getItem("token");
   
	return (
		<>
	<Router>
		<Routes>
			{user && <Route path="/" exact element={<Dashboard />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/home" exact element={<Main />} />
			<Route path="/" element={<Navigate replace to="/home" />} />
			<Route path="/contact" exact element={<Contact />} />
			
		</Routes>
	</Router>	
  </>
	);
}

export default App;