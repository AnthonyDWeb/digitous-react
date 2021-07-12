import React from "react";

const style = {
    fontSize : 100,
    color : "black"
};

class Steps extends React.Component {
    render(){
        return <div className="box col-sm-3 col-6" >
            <span style={style} className="material-icons">
            directions_walk
            </span>
        </div>
    }
}

export default Steps;