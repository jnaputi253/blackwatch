import React, { Component, Fragment } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

export default class NavigationBar extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render = () => (
        <Fragment>
            <Navbar color='dark' dark expand='md'>
                <NavbarBrand href='/'>Blackwatch</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className='mx-auto' navbar>
                        <NavItem>
                            <NavLink href='/'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/about'>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/future'>Future</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Fragment>
    )
}
