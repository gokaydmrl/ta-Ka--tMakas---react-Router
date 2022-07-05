import React, {useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDet = ({ users }) => {


  const { id } = useParams();

  const navigate = useNavigate();
  console.log("nvg", navigate);

  console.log("bu id", id);

  const user = users.find((person) => person.id === parseInt(id));

  console.log("user", user);
  return (
    <div>
      <h2> this is user: {id}</h2>
      <p> his/her name is {user.isim}</p>
      <br />
    </div>
  );
};

export default UserDet;
