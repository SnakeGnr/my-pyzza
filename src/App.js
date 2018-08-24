
import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import "font-awesome/css/font-awesome.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import './App.css';

import Inicio from './container/Inicio'
import Pizzas from './container/Pizzas'
import Pratos from './container/Pratos'
import Porcoes from './container/Porcoes'
import Bebidas from './container/Bebidas'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Router>
              <div>
                <header>
               
                <Navbar color="indigo" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>Peixinho</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink  to="/">Inicio</NavLink>
                          </NavItem>
                          <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret>Cardapio</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="/Pizzas">Pizzas</DropdownItem>
                                    <DropdownItem href="/Pratos">Pratos</DropdownItem>
                                    <DropdownItem href="/Porcoes">Porções</DropdownItem>
                                    <DropdownItem href="/Bebidas">Bebidas</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                          <NavItem>
                              <NavLink  to="/Ambiente">Ambiente</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink  to="/Local">Local</NavLink>
                          </NavItem>
                         
                        </NavbarNav>
                        <NavbarNav right>
                          <NavItem>
                            <form className="form-inline md-form mt-0">
                              <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
                            </form>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
                <div>
                <Switch>
                <Route exact path ='/' component={Inicio}/>
                <Route  path ='/Pizzas' component={Pizzas}/>
                <Route  path ='/Porcoes' component={Porcoes}/>
                <Route  path ='/Pratos' component={Pratos}/>
                <Route  path ='/Bebidas' component={Bebidas}/>
                </Switch>
                </div>
                </header>
                </div>
                
            </Router>
        );
    }
}

export default App;
