import "../index.css";
import {useState} from "react";


function AddTask ({onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <div className="add">
            <input type="text" 
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Digite o título da tarefa"></input>

            <input type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Digite a descrição da tarefa"></input>

            <button 
            onClick={() => {
          // verificar se o título e a descrição estão preenchidos
            if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa.");
            }
            onAddTaskSubmit(title, description);
            setTitle("");
            setDescription("");
            }}
            className="botão">Adicionar</button>
        </div>
    );
}

export default AddTask;