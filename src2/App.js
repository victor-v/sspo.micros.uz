/*import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './Layout';

// Enable responsiveConfig app-wide. You can remove this if you don't plan to build a responsive UI.
Ext.require('Ext.plugin.Responsive');

export default function App() {

    return (
        <Router>
            <Layout/>
        </Router>
    )

}*/

import React, { Component } from 'react';
import { Transition, Container, Grid, Column, TitleBar, Button, Menu, MenuItem, Panel, Toolbar } from '@extjs/ext-react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import NavMenu from './NavMenu/NavMenu';

import About from './About/About';

Ext.require('layout.fit')

class App extends Component {

	store = new Ext.data.Store({
		data: [
			       { name: 'Microsoft', symbol: 'MSFT' },
			       { name: 'Apple', symbol: 'AAPL'}
		       ]
	})
	
	 navigate = (path) => {
		 this.props.history.push(path);
	 }

	render() {

		const { location } = this.props;
		
		const navMenuDefaults = {
			onItemClick: this.navigate,
	        //selection: location.pathname
		}
		
		var d = new Date;
		return (
				<Container fullscreen layout="fit" >
					<TitleBar title="MyFirstExtReactApp" docked="top">
						<Button align="right" ui="action raised" text="RU">
							<Menu defaults={{ handler: this.onStyleChange, group: 'buttonstyle' }}>
								<MenuItem name="ui-type" text="UZ" value=""/>
							</Menu>
						</Button>
		
						<Button align="right" iconCls="x-fa fa-user" text="test"/>
					</TitleBar>
	
					<Panel scrollable docked="left" shadow zIndex={2}>
						<NavMenu
		                    {...navMenuDefaults}
		                />
					
					
						<Toolbar docked="bottom">
							{d.getFullYear()}&nbsp;© Micros Development
						</Toolbar>
					</Panel>
	
					<Grid 
					height="200"
					width="400"
					title="Stocks"
					shadow
					style={{ textAlign: 'left' }}
					store={this.store}
					>
						<Column text="Name" dataIndex="name" flex={1}/>
						<Column text="Symbol" dataIndex="symbol" flex={1}/>
					</Grid>
						
					<Transition type="fade">
	                    <Switch>
	                        <Route path="/" component={About} exact/>
	                    </Switch>
	                </Transition>
				</Container>
		);
	}
}

export default App;
