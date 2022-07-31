import { useState } from "react";
import AddStu from "./components/home/AddStu";

function App() {
  const [student,setStudent] = useState('');
    const [allStudents,setAllStudents] = useState([]);
    const [editMode,setEditMode] = useState(false);
    const [editable,setEditable] = useState(null);

  return (
    <div>
      <AddStu 
      student = {student}
      setStudent = {setStudent}
      allStudents = {allStudents}
      setAllStudents = {setAllStudents}
      editMode = {editMode}
      setEditMode = {setEditMode}
      editable = {editable}
      setEditable = {setEditable}
      />
    </div>
  );
}

export default App;
