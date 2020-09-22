import React from "react";
import history from '../history';





class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state={spans:30};
    }

    digimonPage  = (event) => {
        console.log(this.props.image);
        //history.push('/SingleCard');
        //this.context.history.push('/SingleCard');
        //return <Route path="/SingleCard"/>
        history.push({
            pathname: '/SingleCard',
            state: { detail: "teste louco" ,key:this.props.key ,digimage: this.props.digimage, level: this.props.level, name: this.props.name}
          })
    }

    render() {

        return (
            <div class="ui card" onClick={this.digimonPage} style={{gridRowEnd: `span ${this.state.spans}`}}>
                <a class="image" >
                    <img 
                        alt={'hello'} 
                        src={this.props.digimage}/>
                </a>
                <div class="content">
                    <a class="header" >Name: {this.props.name}</a>
                    <div class="meta">
                        <a>Level: {this.props.level}</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default ImageCard;