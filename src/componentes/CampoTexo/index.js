import { useState } from 'react'
import './ CampoTexto.css'

const CampoTexto = (props) => {
    
    const placeholderModificada = `${props.placeholder}...`

    // let valor = 'Victor Vasconcelos'
    // const [valor, setValor] = useState('Victor Vasconcelos')

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto