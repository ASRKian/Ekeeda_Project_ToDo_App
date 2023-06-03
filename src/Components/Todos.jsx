import { useDispatch, useSelector } from "react-redux"
import { deleteToDo } from "../Redux/Slices/todoSlices";

export default function Todos() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const compId = (index) => {
    dispatch(deleteToDo(index));
  }
  return (
    <div>
      {state.todo.map((todo, index) => (
        <div key={index} className="mx-1 row bg-secondary bg-gradient bg-opacity-25 mt-2 p-2 align-items-center">
          <p className="fs-4 col-10 todos">{todo}
          </p>
          <i className="fa-solid fa-delete-left col-1 fs-1 cursor-pointer" key={index} onClick={() => compId(index)}></i>
        </div>
      ))}
    </div>
  )
}
