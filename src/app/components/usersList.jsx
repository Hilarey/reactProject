import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UsersList = ({ users }) => {
    return (
        <>
            {[users].map((user) => (
                <Link key={user._id} to={`users/${user._id}`}>
                    <span className="fw-bold ">{user.name}</span>
                </Link>
            ))}
        </>
    );
};

UsersList.propTypes = {
    users: PropTypes.object
};

export default UsersList;
