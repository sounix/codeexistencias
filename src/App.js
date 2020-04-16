import React, { Fragment } from 'react';
import { useState } from 'react';

import FormularioExistencias from './components/formularioexistencias.component';

import { 
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
 } from  'reactstrap';

 import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter
 } from 'reactstrap'

function App() {
  let [isOpen, setIsOpen] = useState(false);
  let [modal, setModal] = useState(false);

  return (
    <Fragment>
        <Navbar color="inverse" light expand="md">
            <NavbarBrand href="/">SPA 2020</NavbarBrand>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => setModal(!modal)}>Creditos</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        <Modal isOpen={modal} toggle={() => setModal(!modal)}>
            <ModalHeader toggle={() => setModal(!modal)}>Creditos</ModalHeader>
            <ModalBody>
                <p>SPA 2020, es una aplicaciones web que te facilitara la consulta de existencias desde tu ubicacion actual.</p>
                <p>By Aldrin Gonzalez Cancino © 2010-2020</p>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={() => setModal(!modal)}>Cerrar</Button>
            </ModalFooter>
        </Modal>
        <FormularioExistencias />
    </Fragment>
  );
};

export default App;
