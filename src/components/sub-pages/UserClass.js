import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            exp : 2,
        }
    }
    
    
    render() {
        const {exp} = this.state;

        return(
            <div className="user-class">
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
            </div>
        );

    }
}

export default UserClass;

//<h1>{this.props.name}</h1>  //accessing the name property of the object passed as props to this component