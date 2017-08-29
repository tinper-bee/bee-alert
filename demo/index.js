
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Alert from '../src';
import Icon from 'bee-icon';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 基本样式展示","code":"/**\n * @title 基本样式展示\n * @description 以下两种`Alert`颜色深度由类`dark`控制。`colors`控制背景颜色种类。\n */\n\nimport React, { Component } from 'react';\nimport Icon from 'bee-icon';\nimport Alert from 'tinper-bee';\n\n\n\trender () {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<Alert colors=\"news\">\n\t\t\t\t    <Icon type=\"uf uf-notification\"></Icon>\n\t\t\t\t    <span className=\"alert-text\"><strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.</span>\n\t\t\t\t</Alert>\n\t\t\t\t<Alert colors=\"news\" className =\"dark\">\n\t\t\t\t    <Icon className=\"uf uf-notification\"></Icon>\n\t\t\t\t    <span className=\"alert-text\"><strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.</span>\n\t\t\t\t</Alert>\n\t\t\t</div>\n\t\t)\n\t}\n}","desc":" 以下两种`Alert`颜色深度由类`dark`控制。`colors`控制背景颜色种类。"},{"example":<Demo2 />,"title":" 按钮触发`Alert`","code":"/**\n * @title 按钮触发`Alert`\n * @description 业务场景，通过点击触发按钮动作。控制`Alert`显示与否\n */\n\nimport React, { Component } from 'react';\nimport Button from 'bee-button';\nimport Alert from 'tinper-bee';\n\n\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tshowAlert: false\n\t\t}\n\t}\n\thandleAlertDismiss () {\n\t\tthis.setState({showAlert: false});\n\t}\n\thanderAlertShow () {\n\t\tthis.setState({showAlert: true});\n\t}\n\trender(){\n\t\tif(this.state.showAlert){\n\t\t\treturn ( \n\t\t\t\t<div>\n\t\t\t\t\t<Button type=\"warning\" onClick={this.handleAlertDismiss.bind(this)}> hide alert</Button>\n\t\t\t\t\t<Alert colors=\"news\" className=\"dark\" onDismiss={this.handleAlertDismiss.bind(this)} closeLabel=\"关闭\">\n\t\t\t\t\t    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.\n\t\t\t\t\t</Alert>\n\t\t\t\t</div>\n\t\t\t)\n\t\t}else {\n\t\t\treturn (\n\t\t\t\t<Button onClick={this.handerAlertShow.bind(this)}> Show alert</Button>\n\t\t\t)\n\t\t}\n\n\t}\n}","desc":" 业务场景，通过点击触发按钮动作。控制`Alert`显示与否"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        
        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0,borderColor: "transparent"}} >
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
