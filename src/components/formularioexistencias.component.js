
import React from 'react';
import { Fragment } from 'react';
import { useState } from 'react';

const TablaExistencias = (props) => {

    const renderItems = (value) => {
        if(value && value.length) {
            return (
                value.map((item, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{item.Articulo}</td>
                        <td>{item.Nombre}</td>
                    </tr>
                ))
            )
        }

        return null;
    } 
    
    const renderContent = (value) => {
        if(value.count !== 0 && value.success) {
            const items = renderItems(value.data);
            return (
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Articulo</th>
                        <th>nombre</th>
                    </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            );
        } else {
            return <div>No hay datos que mostrar</div>
        }
    }

    const content = renderContent(props.value);

    return (
        <Fragment>
            {content}
        </Fragment>
    )
}

const FormularioExistencias = () => {
    let [valueQuery, setValueQuery] = useState('');
    let [data, setData] = useState([]);

    const guardarValorQuery = e => {
        setValueQuery(e.target.value);
    }

    const enviarQuery = (e) => {
        e.preventDefault();
        fetch(`https://api-spa-v2020.herokuapp.com/api/existencias/articulos?_nombre=${valueQuery}`)
            .then(response => response.json())
            .then(result => setData(result));
    }

    return (
        <Fragment>
            <form className="form-inline" onSubmit={enviarQuery}>
                <input className="form-control mr-sm-2" type="search" placeholder="Ej. *aceit*patro*1lt*" aria-label="Search" value={valueQuery} onChange={guardarValorQuery} />
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Buscar</button>
            </form>
            <TablaExistencias value={data} />
        </Fragment>
    );
 }

 export default  FormularioExistencias;