import React from 'react'


class Button extends React.Component{

        render(){
            // {this.props.isSelected}
                return (
                        <button style={{width: 50}} onClick={this.props.onClick}> {this.props.children} </button>
                )
        }

}


export default Button;