import { useState } from "react";
import Encabezado from "./Encabezado";
import Footer from "./Footer";
import FormularioTODO from "./FormularioTODO";
import ListaTODOs from "./ListaTODOs";

export interface TODO {
    descripcion: string;
    fecha: Date;
}

const TodoPage = () => {
    const [listaPorHacer, setListaPorHacer] = useState<TODO[]>([]);

    const nombreApp = "TODO App";

    const agregarTODO = (descripcion: string) => {
        const nuevoTODO: TODO = {
            descripcion: descripcion,
            fecha: new Date()
        }

        // listaPorHacer.push(nuevoTODO);
        // console.log(listaPorHacer);
        setListaPorHacer([...listaPorHacer, nuevoTODO]);

    }

    const eliminarTODO = (indice: number) => {
        listaPorHacer.splice(indice, 1);
        setListaPorHacer([...listaPorHacer]);
    }

    return <div className="container">
        <Encabezado titulo={nombreApp}/>
        <FormularioTODO onAgregarTODO={agregarTODO}/>
        <ListaTODOs lista={listaPorHacer} onEliminarTODO={eliminarTODO}/>
        <Footer />
    </div>
}

export default TodoPage;