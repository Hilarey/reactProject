import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const UserPage = ({ user }) => {
    const history = useHistory();
    const handleSave = () => {
        history.push("/users");
    };
    return (
        <>
            {console.log("user._id >> ", user._id)}
            {[user].map((user) => (
                <div key={user._id}>
                    <h1>{user.name}</h1>
                    <h2>Профессия: {user.profession.name}</h2>
                    <h5>
                        {user.qualities.map(({ name, color, _id }) => (
                            <span key={_id} className={"badge m-1 bg-" + color}>
                                {name}
                            </span>
                        ))}
                    </h5>
                    <h4>completedMeetings: {user.completedMeetings}</h4>
                    <h4>Rate: {user.rate}</h4>
                    <button
                        onClick={() => {
                            handleSave();
                        }}
                    >
                        Все пользователи
                    </button>
                </div>
            ))}
        </>
    );
};

UserPage.propTypes = {
    user: PropTypes.object
};

export default UserPage;
