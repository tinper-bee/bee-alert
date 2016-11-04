import Alert from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';


function demo1() {
    return (
			<div>
				<Alert colors="news">
				    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
				</Alert>
				<Alert colors="success">
				    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
				</Alert>
				<Alert colors="warning">
				    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
				</Alert>
				<Alert colors="danger">
				    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
				</Alert>
				<Alert colors="info">
				    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
				</Alert>
			</div>
    );
}

class Demo2 extends Component {
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
				<Alert colors="news" className="dark" onDismiss={this.handleAlertDismiss.bind(this)} closeLabel="关闭">
				    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
				</Alert>
			)
		}
		return (
			<Button onClick={this.handerAlertShow.bind(this)}> Show alert  hide button</Button>
		)
	}
}

class Demo3 extends Component {
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

ReactDOM.render(demo1(), document.getElementById('ReactAlertDemo1'));
ReactDOM.render(<Demo2 />, document.getElementById('ReactAlertDemo2'));
ReactDOM.render(<Demo3 />, document.getElementById('ReactAlertDemo3'));
