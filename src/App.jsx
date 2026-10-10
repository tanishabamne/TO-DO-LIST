import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_to_task, editSave, recComp, recDel, recinComp } from "./colorSlice";

const App = () => {
  const mytask = useSelector(state => state.mytask.task);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [btnstatus, setbtnstatus] = useState(true);
  const [recId, setRecid] = useState("");
  console.log(mytask);

  const recEdit = (id, wrk) => {
    setTask(wrk)
    setRecid(id)
    setbtnstatus(false)
  }


  const uodateSave = () => {
    setbtnstatus(true);
    dispatch(editSave({ id: recId, work: task }));
    setTask("")
  };

  let i = 0;
  const ans = mytask.map((key) => {
    i++;
    return (
      <>
        <tr>
          <td>{i}</td>
          {key.status == "complete" ? (<>
            <span style={{ color: "red", textDecoration: "line-through" }}>{key.work}</span>

          </>) : (<>
            {key.work}
          </>)}

          <td>
            <button className="delete-btn" onClick={() => { dispatch(recDel({ id: key.id })) }}>Delete</button>
          </td>

          <td>
            <button className="complete-btn" onClick={() => { dispatch(recComp({ id: key.id })) }}>complete</button>
          </td>

          <td>
            <button className="incomplete-btn" onClick={() => { dispatch(recinComp({ id: key.id })) }}>Incomplete</button>
          </td>

          <td>
            <button className="edit-btn" onClick={() => { recEdit(key.id, key.work) }}>Edit</button>
          </td>
        </tr>
      </>
    )
  })

  return (
    <>
      {/* <h1> ToDo app by using React</h1> */}
      <div className="todo-container">

        <h1>✨ My Todo App</h1>

        <p className="subtitle">
          Manage your daily tasks with ease
        </p>

      </div>

      <hr />

      <div className="input-area">
        Enter Task: <input type="text" value={task} onChange={(e) => { setTask(e.target.value) }} />

        {btnstatus ? (<>
          <button className="add-btn" onClick={() => { dispatch(add_to_task({ id: Date.now(), work: task, status: "incomplete" })); setTask("") }}>Add</button>
        </>) : (<>
          <button className="update-btn" onClick={uodateSave}>update</button>
        </>)}

      </div>

      <hr />

      <table className="todo-table">
        <tr>
          <th>Task ID</th>
          <th>Work</th>

        </tr>
        {ans}
      </table>

    </>
  )
}
export default App;




// import { useSelector,useDispatch } from "react-redux";
// import { changeColor } from "./colorSlice";
// const App=()=>{
//   const clr =useSelector(state=>state.mycolor.color);
//   const dispatch=useDispatch();
//   return(
//     <>
//      <h1>welcome to our web page baby</h1>
//      <button onClick={()=>{dispatch(changeColor())}}>blue</button>

//      <div style={{width:"250px", height:"250px", backgroundColor:clr}}></div>
//     </>
//   )
// }

// export default App;