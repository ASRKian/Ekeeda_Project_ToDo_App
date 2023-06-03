import { useDispatch, useSelector } from "react-redux"
import { clearToDo } from "../Redux/Slices/todoSlices";
import '../index.css'

export default function TaskUpdater() {
    const state = useSelector(state => state.todo);
    const dispatch = useDispatch();
  return (
    <div className="bg-secondary bg-gradient bg-opacity-10 p-1 d-flex justify-content-center align-items-center mt-2">
      <p className="mt-2 p-1 fs-2 font-weight-bold update">You have {state.length} pending tasks</p>
      <p className="bg-danger bg-gradient mt-2 p-2 col-3 rounded clear-all cursor-pointer fs-2 update updateBtn" onClick={() => dispatch(clearToDo())}>Clear All</p>
    </div>
  )
}
