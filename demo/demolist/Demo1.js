/**
 * @title 基本样式展示
 * @description 以下两种`Alert`颜色深度由类`dark`控制。`colors`控制背景颜色种类。
 */
class Demo1 extends Component {
	render () {
		return (
			<div>
				<Alert colors="news">
				    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
				</Alert>
				<Alert colors="news" className ="dark">
				    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
				</Alert>
			</div>
		)
	}
}