/**
 * @title 按钮触发`Alert`
 * @description 业务场景，通过点击触发按钮动作。控制`Alert`显示与否
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Alert from '../../src';

export default class Demo2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAlert: false
		}
	}
	handleAlertDismiss () {
		this.setState({showAlert: false});
	}
	handerAlertShow () {
		this.setState({showAlert: true});
	}
	render(){
		if(this.state.showAlert){
			return ( 
				<div>
					<Button type="warning" onClick={this.handleAlertDismiss.bind(this)}> hide alert</Button>
					<Alert colors="news" className="dark" onDismiss={this.handleAlertDismiss.bind(this)} closeLabel="关闭">
					    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
					</Alert>
				</div>
			)
		}else {
			return (
				<Button onClick={this.handerAlertShow.bind(this)}> Show alert</Button>
			)
		}

	}
}