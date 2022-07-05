import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Users = ({ users }) => {
  let { id } = useParams();

  return (
    <div>
      <h4>Users</h4>
      {users.map((item) => {
        return (
          <p key={item.id}>
            <Link to={`/users/${item.id}`}>{item.isim}</Link>
          </p>
        );
      })}
    </div>
  );
};

export default Users;
