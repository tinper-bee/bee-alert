/**
 * @title 基本样式展示
 * @description 以下两种`Alert`颜色深度由类`dark`控制。`colors`控制背景颜色种类。Alert本身不支持关闭功能,需要你控制显示隐藏。
 */

import React, { Component } from 'react';
import Icon from 'bee-icon';
import Alert from '../../src';

export default class Demo1 extends Component {
	render () {
		return (
			<div>
				<Alert colors="news">
				    <Icon type="uf uf-notification" />
				    <span className="alert-text"><strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.</span>
				</Alert>
				<Alert colors="news" className ="dark">
				    <Icon className="uf uf-notification" />
				    <span className="alert-text"><strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.</span>
				</Alert>
			</div>
		)
	}
}