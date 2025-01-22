interface EncabezadoProps {
    titulo: string;
}

const Encabezado = (props: EncabezadoProps) => {
    return <h1>
        {props.titulo}
    </h1>
}

export default Encabezado;