import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const TodoDetails = () => {
  const [data, setData] = useState();
  const [newData, setNew] = useState("");
  const { id } = useParams();
  // console.log(id)
  const getDetails = async () => {
    await axios
      .get(`http://localhost:8080/todos/${id}`)
      .then((res) => setData(res.data));
  };

  const handleEdit = async (id) => {
    await axios.patch(`http://localhost:8080/todos/${id}`, {
        ...data,
        title:newData

    })
    .then(()=>getDetails())
  };

  useEffect(() => {
    getDetails();
  }, []);
  // console.log(newData)
  return (
    <div>
      <div>
        <h1>{data?.title}</h1>
        <input
          type="text"
          placeholder="change title"
          onChange={(e) => setNew(e.target.value)}
        />
      </div>
      <div>
        <h2>add more details</h2>
        <button onClick={() => handleEdit(id)}>Save</button>
      </div>
    </div>
  );
};

export default TodoDetails;
