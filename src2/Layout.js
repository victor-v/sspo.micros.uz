import React, { Component } from 'react'
import { Transition, Container, TitleBar, Button, Sheet, Panel, Menu, MenuItem, Toolbar, SegmentedButton  } from '@extjs/ext-react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

class Layout extends Component {
    render() {
    	
    	
    	var d = new Date;

        return (
            <Container fullscreen layout="fit" >
            
            
                <TitleBar title="MyFirstExtReactApp" docked="top">
                    <Button align="right" ui="action raised" text="RU">
                        <Menu defaults={{ handler: this.onStyleChange, group: 'buttonstyle' }}>
                            <MenuItem name="ui-type" text="UZ" value=""/>
                        </Menu>
                    </Button>
                   
                    <Button align="right" iconCls="x-fa fa-user" text="Профиль"/>
                </TitleBar>
            
            </Container>
        );
    }
}

export default withRouter(Layout);