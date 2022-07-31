import AllStu from './AllStu';

function AddStu(props) {
    

    const addHandler=(e) => {
        e.preventDefault();
        const newAllStudents = {
            id: Date.now(),
            name:props.student,
            isPresent:undefined
        }
        props.setAllStudents([...props.allStudents,newAllStudents])
        props.setStudent(" ")
        if(props.student == ' ') {
            alert("pleas type student's name in input")
        }
    } 

    const updateHandler = (e) => {
        e.preventDefault();
        props.setAllStudents(props.allStudents.map( single => {
            if(single.id === props.editable.id) {
                single.name = props.student
            }

            return single
        }))
        props.setStudent(" ")
        props.setEditMode(false)
        console.log(props.editable.id);
    }


  return (
    <div>
        <center>
            <div className="form-control mt-10 w-full max-w-xs">
                <label className="label">
                    <span className="label-text"><b>What is student name?</b></span>
                </label>
                <form onSubmit={(e) => props.editMode? updateHandler(e) : addHandler(e) }>
                <input
                    value={props.student}
                    onChange= {(e) => props.setStudent(e.target.value)}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    style={{outline:'none'}}
                />
                <button type='onSubmit' className="btn btn-sm btn-wide">{props.editMode? "update Student" : "Add student"}</button>
                </form>
                
            </div>
        </center>
       <center>

        <AllStu 
            student = {props.student}
            setStudent = {props.setStudent}
            allStudents = {props.allStudents}
            setAllStudents = {props.setAllStudents}
            editMode = {props.editMode}
            setEditMode = {props.setEditMode}
            editable = {props.editable}
            setEditable = {props.setEditable}
        />

       </center>
       
    </div>
  )
}

export default AddStu
