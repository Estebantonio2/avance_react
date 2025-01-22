import Encabezado from "./Encabezado";
import Footer from "./Footer";
import FormularioTODO from "./FormularioTODO";
import ListaTODOs from "./ListaTODOs";

const TodoPage = () => {
    return <div>
        <Encabezado />
        <FormularioTODO />
        <ListaTODOs />
        <Footer />
    </div>
}

export default TodoPage;