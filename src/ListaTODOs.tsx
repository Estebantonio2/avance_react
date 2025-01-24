import { TODO } from "./TodoPage";

interface ListaTODOsProps {
    lista: TODO[],
    onEliminarTODO: (indice: number) => void;
}

const ListaTODOs = (props: ListaTODOsProps) => {
    return <section className="mt-2">
        <ul className="list-group" id="todos">
            {
                props.lista.map((item: TODO, indice: number) => {
                    return <li key={indice} className="list-group-item" onClick={() => {
                        props.onEliminarTODO(indice);
                    }}>{item.descripcion}</li>
                })
            }
        </ul>
    </section>
}

export default ListaTODOs;