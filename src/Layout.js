import React, { Component } from 'react'
import { Transition, Container, TitleBar, Button, Panel, Menu, MenuItem, Toolbar } from '@extjs/ext-react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { medium, large } from './responsiveFormulas';

import NavMenu from './NavMenu/NavMenu';

import About from './About/About';
import Emp from './Emp/Emp';

class Layout extends Component {

    navigate = (path) => {
        this.props.history.push(path);
    }
    
    onTypeChange = (item) => this.setState({ type: item.value })

    render() {
        const { location } = this.props;

        const navMenuDefaults = {
            onItemClick: this.navigate,
            selection: location.pathname
        }
        
        var d = new Date;

        return (
            <Container fullscreen layout="fit" >
            
            
                <TitleBar title="ИС «Выпускник»" docked="top">
                    <Button align="right" ui="action raised" text="RU">
                        <Menu defaults={{ handler: this.onStyleChange, group: 'buttonstyle' }}>
                            <MenuItem name="ui-type" text="UZ" value=""/>
                        </Menu>
                    </Button>
                   
                    <Button align="right" iconCls="x-fa fa-user" text="Профиль"/>
                </TitleBar>
            
               
                <Panel scrollable docked="left" shadow zIndex={2}>
                    <NavMenu
                        {...navMenuDefaults}
                    />
                    <Toolbar docked="bottom">
                        {d.getFullYear()}&nbsp;© Micros Development
                    </Toolbar>
                </Panel>

                <Transition type="fade">
                    <Switch>
                        <Route path="/" component={About} exact/>
                        <Route path="/emp" component={Emp}/>
                    </Switch>
                </Transition>
                
            </Container>
        );
    }
}

export default withRouter(Layout);