import React from "react";
import ImageCard from '../components/ImageCard';
import Spinner from '../components/Spinner';
//import styled from "styled-components";

import Background from '../images/Wiki-background.jpg';

var onePage = {
    width: "100%",
    height: "1080px",
    opacity:0.8,
    backgroundImage: "url(" + Background + ")",
};


class First extends React.Component{



    state = {detail: '', name: [], loading: true};
    

    testao = (event) => {
        if(this.props.location.state) {
            console.log(this.props.location.state.name);
            console.log(this.props.location.state.key);
            console.log(this.props.location.state.digimage);
            console.log(this.props.location.state.level);
            this.setState({ loading: false });
        }
    }

    doNotChange = (event) =>{
        event.preventDefault();
    }


    render(){
        if(this.props.location.state){
            return (
                <div style={ onePage }>
                    <div class="ui card" onClick={this.doNotChange} style={{gridRowEnd: `span ${this.state.spans}`}}>
                    <a class="image" href="#">
                        <img 
                            alt={'hello'} 
                            src={this.props.location.state.digimage}/>
                    </a>
                    <div class="content">
                        <a class="header" href="#">Name: {this.props.location.state.name}</a>
                        <div class="meta">
                            <a>Level: {this.props.location.state.level}</a>
                        </div>
                    </div>
                </div>
                </div>
                
            );
        }else{
            return(<div><Spinner loadText="Searching Digimon"/></div>);
        }
    }
};

//return (
  //  <div  onClick={this.digimonPage} style={{gridRowEnd: `span ${this.state.spans}`}}>
    //    <img 
      //      alt={'hello'} 
        //    src={this.props.digimage}
        ///>
        //<label>Name: {this.props.location.state.name}</label>
        //<br></br>
        //<label>Level: {this.props.location.state.level}</label>
   // </div>
//);

export default First;