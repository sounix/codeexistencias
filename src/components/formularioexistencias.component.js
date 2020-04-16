
import React from 'react';
import { Fragment } from 'react';
import { useState } from 'react';
import { Container, Form, Input, Button, Alert } from 'reactstrap';

import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap';

const TablaExistencias = (props) => {

    const renderItems = (value) => {
        if(value && value.length) {
            return (
                value.map((item, index) => (
                    <ListGroupItem key={index}>
                        <ListGroupItemHeading>
                            <Badge color="primary" pill>SKU: {item.Articulo}</Badge> <Badge color="info" pill>CB: {item.CodigoBarras}</Badge>
                        </ListGroupItemHeading> 
                        <ListGroupItemText>
                            <h4>{item.Nombre}</h4>
                            <div><strong>{item.DescSubfamila}</strong></div>
                            <div>Relacion: <span>{item.Relacion}</span></div>
                            <div className="mt-3"><Button className="ml-auto" color="info">Consultar</Button></div>
                        </ListGroupItemText>                       
                    </ListGroupItem>
                ))
            )
        }

        return null;
    } 
    
    const renderContent = (value) => {
        if(value.count !== 0 && value.success) {
            const items = renderItems(value.data);
            return (
                <ListGroup>
                    {items}
                </ListGroup>
            );
        } else {
            return <Alert color="danger">No hay datos que mostrar</Alert>
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
    let [valueQuery, setValueQuery] = useState('*nivea*');
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
            <Container className="w-75 mt-4">
                <Form onSubmit={enviarQuery}>
                    <Input className="mt-2 w-100" type="search" placeholder="Ej. *aceit*patro*1lt*" value={valueQuery} onChange={guardarValorQuery}/>
                    <Button className="mt-1 mb-4 w-100" color="primary">Buscar</Button>
                </Form>
            </Container>
            <Container className="px-3">
                <TablaExistencias value={data} />
            </Container>
        </Fragment>
    );
 }

 export default  FormularioExistencias;