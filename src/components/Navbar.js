import React from "react";
import { Link } from 'react-router-dom';

function Navbar(props) {
    const userDetails = props.data;


    const navStyle = {
        color: '#FFF8F0'
    };

    return (
        <nav className="sitenav">
            <div className="titlecont">
                <Link style={navStyle} to= '/'>
                    <div className="titletext">The Big Record</div>
                    <img src={require('../assets/record.svg').default} alt='' style={{position: 'absolute'}} className="cartimg"/>
                </Link> 
            </div>
            <div className="sitelinks">
                {userDetails.length > 0 &&
                <Link style={navStyle} to= '/userposts'>
                    <div className="userlink">{userDetails.username}</div>
                </Link> 
                }
                {userDetails.length > 0 && 
                <Link style={navStyle} to='/login'>
                    <button class='logoutbtn' type="button" onClick={props.onLogOut()}>Logout</button>
                </Link> 
                }
                {userDetails.length === 0 &&
                <Link style={navStyle} to='/login'>
                    <button class='loginbtn' type="button">Login</button>
                </Link>
                }
                {userDetails.length === 0 && 
                <Link style={navStyle} to='/signup'>
                    <button class='signupbtn' type="button">Signup</button>
                </Link>
                }
            </div>
        </nav>
    )
}

export default Navbar