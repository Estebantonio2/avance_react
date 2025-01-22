import Encabezado from "./Encabezado";
import Footer from "./Footer";
import FormularioTODO from "./FormularioTODO";
import ListaTODOs from "./ListaTODOs";

export interface TODO {
    descripcion: string;
    fecha: Date;
}

const TodoPage = () => {
    const nombreApp = "TODO App";
    const listaPorHacer: TODO[] = [
        {
            descripcion: "Dormir",
            fecha: new Date()
        },
        {
            descripcion: "Sacar al perro",
            fecha: new Date()
        }
    ]
    return <div>
        <Encabezado titulo={nombreApp}/>
        <FormularioTODO />
        <ListaTODOs lista={listaPorHacer}/>
        <Footer />
    </div>
}

export default TodoPage;