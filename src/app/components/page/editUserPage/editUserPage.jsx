import React, { useEffect, useState } from "react";
import TextField from "../../common/form/textField";
import api from "../../../api";
import { useHistory } from "react-router-dom";

const EditUserPage = () => {
    const history = useHistory();
    const [data, setData] = useState({
        name: ""
    });
    const [updateUser, setUpdateUser] = useState();
    const userURL = window.location.pathname.split("/")[2];
    const users = JSON.parse(localStorage.getItem("users")).find(
        (user) => user._id === userURL
    );

    useEffect(() => {
        api.users
            .update(data._id, data)
            .then((data) => setUpdateUser(JSON.stringify(data)));
    }, []);

    useEffect(() => {
        setData(users);
    }, []);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = () => {
        history.push(`/users/${data._id}`);
    };

    // console.log("object :>> ", updateUser);
    // console.log("data_id ZHBR :>> ", data._id);
    // console.log("data :>ZHBR> ", data);

    return (
        <form className="w-25 m-auto" onSubmit={handleSubmit}>
            <TextField
                label="Имя"
                name="name"
                value={data.name}
                onChange={handleChange}
            />
            <button className="btn btn-primary w-100 mx-auto" type="submit">
                Обновить
            </button>
        </form>
    );
};

export default EditUserPage;
