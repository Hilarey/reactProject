import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user !== userId));
  };

  const renderPhrase = (number) => {
    number = users.length;
    return number === 0 ? (
      <span className="badge bg-danger "> Никто с тобой не тусанет</span>
    ) : number === 2 || number === 3 || number === 4 ? (
      <span className="badge bg-primary ">
        {number} человек тусанут с тобой сегодня
      </span>
    ) : (
      <span className="badge bg-primary ">
        {number} человек тусанет с тобой сегодня
      </span>
    );
  };

  return (
    <>
      <h2>{renderPhrase()}</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody key={user._id}>
            <tr>
              <th scope="row">{user.name}</th>
              <td>
                {user.qualities.map((qualitie) => (
                  <span className={`badge bg-${qualitie.color} m-1`}>
                    {`${qualitie.name}`}
                  </span>
                ))}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{`${user.rate} /5`}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm m-2"
                  onClick={() => handleDelete(user)}
                >
                  delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};
export default Users;
