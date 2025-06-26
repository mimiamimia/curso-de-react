import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import "../index.css";
import { useNavigate } from "react-router-dom";

function Task (props){

    const navigate = useNavigate();

    function onSeeDetailsClick(task){
        const query = new URLSearchParams()
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?title=${task.title}&description=${task.description}`);
    }
    return(
        <ul>{props.task.map((task) => (
        <li key={task.id}> 

        <button onClick={() => props.onTaskClick(task.id)} className="task">
            {task.isCompleted && <CheckIcon className="check"/>}
            {task.title}
            
        </button>

        <button onClick={() => onSeeDetailsClick(task)} className="icon">
            <ChevronRightIcon className="seta"/>
        </button>
        <button onClick={()=> props.onDeleteTaskClick(task.id)} className="icon">
            <TrashIcon className="seta"/>
        </button>
        </li>

        ))}
        </ul>
        
    );
}

export default Task;