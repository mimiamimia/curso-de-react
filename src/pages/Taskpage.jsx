import { useSearchParams } from "react-router-dom";

function TaskPage(){
    const [SearchParams] = useSearchParams();
    const title = SearchParams.get("title")
    const description = SearchParams.get("description")
    return(
        <div className="gerenciador">
            <div className="gerenciador-container">
                <h1 className="title">Detalhes da Tarefas</h1>

                    <div className="add">
                        <h2 className="txt">{title}</h2>
                        <p className="txt">{description}</p>
                    </div>
        </div>
    </div>
    )
}

export default TaskPage;