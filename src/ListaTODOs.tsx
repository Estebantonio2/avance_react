import { TODO } from "./TodoPage";

interface ListaTODOsProps {
    lista: TODO[]
}

const ListaTODOs = (props: ListaTODOsProps) => {
    return <section>
        <ul id="todos">
            {
                props.lista.map((item: TODO) => {
                    return <li>{item.descripcion}</li>
                })
            }
        </ul>
    </section>
}

export default ListaTODOs;