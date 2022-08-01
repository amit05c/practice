import React, { useEffect } from "react";
import { useDispatch, useSelector,shallowEqual } from "react-redux";
import axios from "axios";
import { handleLoading, handleSuccess } from "../../Redux/todoReducer/action";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
const Todo = () => {
  const dispatch = useDispatch();
  const { todos, isLoading } = useSelector((store) => store.todoReducer,shallowEqual);
  console.log(todos, isLoading);

  const getTodo = async () => {
    dispatch(handleLoading());
    await axios
      .get(`http://localhost:8080/todos`)
      .then((res) => dispatch(handleSuccess(res.data)))
      .catch((e) => dispatch(isError()));
  };

  const addTodo = (todo) => {
    const postData = async () => {
      let res = await axios
        .post(`http://localhost:8080/todos`, todo)
        .then(() => getTodo())
        .catch((e) => console.log(e));
    };
    postData();
  };


  const deleteTodo= async(id)=>{
        await axios.delete(`http://localhost:8080/todos/${id}`)
        .then(()=>getTodo())
  }

  useEffect(() => {
    getTodo();
  }, []);
  return (
    <div>
      <h1>TODO APP</h1>
      <TodoInput addTodo={addTodo} />

      <h2>Todo List</h2>
      {todos.map((el) => (
        <TodoList key={el.id} todo={el} deleteTodo={deleteTodo} getTodo={getTodo} />
      ))}
    </div>
  );
};

export default Todo;
