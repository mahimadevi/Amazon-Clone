import Avatar from "@mui/material/Avatar";
//import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Logincontext } from "../context/Contextprovider";
import "./rightheader.css";
import { Divider } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
// import { makeStyles } from "@material-ui/core";

// const usestyle = makeStyles({
//   component: {
//     marginTop: 10,
//     marginRight: "-50px",
//     width: "300px",
//     padding: 50,
//     height: "300px",
//   },
// });

import styled from 'styled-components';

const StyledComponent = styled.div`
  margin-top: 10px;
  margin-right: -50px;
  width: 300px;
  padding: 50px;
  height: 300px;
`;



const Rightheader = ({ logclose, userlog }) => {
  const imgd = "/india.png";

  const { account, setAccount } = useContext(Logincontext);

  //  this is left drawer bt name is right header

  return (
    <div className="rightheader">
      <div className="right_nav">
        {account ? (
          <Avatar className="avtar2">{account.fname[0].toUpperCase()}</Avatar>
        ) : (
          <Avatar className="avtar"></Avatar>
        )}
        {account ? <h3>Hello, {account.fname.toUpperCase()}</h3> : ""}
      </div>
      <div className="nav_btn" onClick={() => logclose()}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Shop By Category</NavLink>
        <Divider style={{ width: "100%", marginLeft: -20 }} />
        <NavLink to="/" style={{ marginTop: 10 }}>
          Today's Deal
        </NavLink>
        {account ? (
          <NavLink to="/buynow">Your Order</NavLink>
        ) : (
          <NavLink to="/login">Your Order</NavLink>
        )}
        <Divider style={{ width: "100%", marginLeft: -20 }} />
        <div className="flag">
          <NavLink to="" style={{ marginTop: 14 }}>
            Settings
          </NavLink>
          <img
            src={imgd}
            alt="india flag"
            style={{ width: 35, marginLeft: 10 }}
          />
        </div>

        {account ? (
          <div className="flag">
            <LogoutIcon style={{ fontSize: 18, marginRight: 4 }} />
            <h3
              onClick={() => userlog()}
              style={{ cursor: "pointer", fontWeight: 500 }}
            >
              Log Out
            </h3>
          </div>
        ) : (
          <NavLink to="/login">Sign In</NavLink>
        )}
      </div>
    </div>
  );
};

export default Rightheader;
