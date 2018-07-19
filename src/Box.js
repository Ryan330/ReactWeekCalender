import React from "react"


//Box Class
class Box extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: props.message
        };
    }
    render() {
        return (
            <div className="boxDesign1">

                {this.state.message}
            
            </div>
        )
    }

}


export default Box;