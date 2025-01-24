import { useState } from "react";

interface FormularioTODOProps {
    onAgregarTODO: (descripcion: string) => void;
}

const FormularioTODO = (props: FormularioTODOProps) => {
    const [descTODO, setDescTODO] = useState<string>('');

    const onDescTODOChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescTODO(e.target.value);
    }

    return <section className="row">
        <div className="col-md-11">
            <input className="form-control" type="text" value={descTODO} onChange={onDescTODOChange}></input>
        </div>
        <div className="col-md-1">
            <button className="btn btn-primary" type="button" onClick={() => {
                props.onAgregarTODO(descTODO);
                setDescTODO('');
            }}>+</button>
        </div>
    </section>
}

export default FormularioTODO;