import React from "react"


//Weekend Box Class
class Box2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: props.message
        };
    }
    render() {
        return (
            <div className="boxDesign2">

                {this.state.message}
            
            </div>
        )
    }

}


export default Box2;