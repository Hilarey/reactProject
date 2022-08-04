import React from "react";
import BookMark from "./bookmark";
import Qualitie from "./qualitie";

const User = ({ onDelete, users, onTooggleBookMark }) => {
  return (
    <>
      {users.map(
        ({
          _id,
          name,
          rate,
          completedMeetings,
          profession,
          qualities,
          bookmark,
        }) => (
          <tr key={_id}>
            <td>{name}</td>
            <td>
              <Qualitie {...qualities} />
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate} /5</td>
            <td>
              <BookMark
                status={bookmark}
                users={users}
                id={_id}
                onTooggleBookMark={onTooggleBookMark}
              />
            </td>
            <td>
              <button onClick={() => onDelete(_id)} className="btn btn-danger">
                delete
              </button>
            </td>
          </tr>
        )
      )}
    </>
  );
};

export default User;
