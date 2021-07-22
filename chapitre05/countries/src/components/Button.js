import React from 'react';


class Button extends React.Component{

    render(){
        return <button className="btn-country" name={this.props.children} onClick={this.props.onClick}>{this.props.children}</button>
    }
}


export default Button;
