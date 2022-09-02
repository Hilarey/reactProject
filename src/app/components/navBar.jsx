import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul
            className="list-inline d-flex justify-content-between m-4"
            style={{ width: 200 }}
        >
            <li>
                <Link to="/">Main</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
        </ul>
    );
};

export default NavBar;
