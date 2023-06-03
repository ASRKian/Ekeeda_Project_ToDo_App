import { useState } from "react"
import { addToDo } from "../Redux/Slices/todoSlices";
import { useDispatch } from "react-redux";


export default function Input() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const inptVal = (e) => {
    setTodo(e.target.value)
  }

  const takingVal = () => {
    dispatch(addToDo(todo))
    setTodo("")
  }
  return (
    <div className="bg-secondary bg-gradient bg-opacity-10 mt-2 p-2">
      <input type="text" placeholder="add your new todo" className="fs-2 input" value={todo} onChange={inptVal} />
      <i className="fa-sharp fa-solid fa-square-plus fs-1 cursor-pointer " onClick={() => takingVal()}></i>
    </div>
  )
}
