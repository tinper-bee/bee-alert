import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'bee-button';


const propTypes = {
  onDismiss: PropTypes.func,
  closeLabel: PropTypes.string
};

const defaultProps = {
	clsPrefix : "u-alert"
};

class Alert extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showCloseLabel : !!this.props.closeLabel
		}
	}
	/**
	 * 渲染右上角关闭alert按钮
	 */
	renderDismissButton(onDismiss) {
	    return (
	      <Button
	        className="close"
	        onClick={onDismiss}
	      >
	        <span>&times;</span>
	      </Button>
	    );
	}
    /**
	 * 渲染alert信息内部关闭alert的文字按钮
	 * @onDismiss 外界传进来的操作动作方法
	 * @closeLabel 内部关闭按钮显示的文字
	 */
    renderSrOnlyDismissButton(onDismiss, closeLabel) {
	    return (
		    <Button
		        className="close sr-only"
		        onClick={onDismiss}
		    >
		        {closeLabel}
		    </Button>
	    );
    }

    render() {
	    const { onDismiss, closeLabel, colors , className, children, clsPrefix,...others } =
	      this.props;

	    let clsObj = {};

	    clsObj[`${clsPrefix}`] = true;

	    if(colors) {
	    	clsObj[`${clsPrefix}-${colors}`] = true;
	    }else{
	    	clsObj[`${clsPrefix}-warning`] = true;
	    }
	    return (
	      <div
	        {...others}
	        role="alert"
	        className={classNames(className, clsObj)}
	      >
	        
	        {children}
	        {!this.state.showCloseLabel && this.renderDismissButton(onDismiss)}
	        {this.state.showCloseLabel && this.renderSrOnlyDismissButton(onDismiss, closeLabel)}
	      </div>
	    );
    }
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
export default  Alert