import React from "react";
import Banner from "../Banner"
import Herosection from "../Herosection"
import Praise from '../Praise'
import Buttoncomp from '../Buttoncomp'
import Footer from '../Footer'
import Modulesmain from '../Modulesmain'


const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<>
	<Banner/>
    <Herosection/>
    <Buttoncomp/>
    <Praise/>
    <Modulesmain/>
    <Footer/>
		</>
	);
};

export default Main;