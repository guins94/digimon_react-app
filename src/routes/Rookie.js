import React from 'react';
import Unsplash from '../api/unsplash';
import ImageList from '../components/imageList';
import BreadCrumb from '../components/BreadCrumb';

import Background from '../images/Wiki-background.jpg';

var onePage = {
    width: "100%",
    height: "100%",
    opacity:0.8,
    backgroundImage: "url(" + Background + ")",
};

class Rookie extends React.Component{
    state = {images: [], search: false};

    componentDidMount = async () =>{

        const response = await Unsplash.get('/level/Rookie',{
        });
        this.setState({ images: response.data});
    }


    helperFunction () {
        return(
            <div className="ui container" >
                <ImageList images={this.state.images}/>
            </div>
        );
    }

    render(){
        return (
            <section >
                <BreadCrumb/>
                <div style={ onePage } className= "render content">{this.helperFunction()}</div>
            </section>
        );
    }
};

export default Rookie;