import { useNavigate } from "react-router-dom";
import Navbar2 from "../Navbar2";
import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logout Clicked");
    navigate("/login");
  };
 
  return (
    <>
      <Navbar2></Navbar2>
      <Sidebar/>
      <div className="container">
        <h1> This is dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
       
      </div>
      
    </>
  );
};

export default Dashboard;
