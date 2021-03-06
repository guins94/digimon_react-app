import React from 'react';
import Unsplash from '../api/unsplash';
import ImageList from '../components/imageList';
import SearchBar from '../components/SearchBar';
import Spinner from '../components/Spinner';
import BreadCrumb from '../components/BreadCrumb';

import Background from '../images/Wiki-background.jpg';

import './search.css';

var onePage = {
    width: "100%",
    height: "100%",
    opacity:0.8,
    backgroundImage: "url(" + Background + ")",
};

class Search extends React.Component{
    state = {images: [], search: false};

    componentDidMount = async () =>{
        this.setState({ search: false});
        const response = await Unsplash.get('',{
        });
        this.setState({ images: response.data});
    }

    onSearchSubmit = async (term) => {
        if (term === ''){
            this.setState({ search: true});
            const response = await Unsplash.get('',{
            });
            this.setState({ search: false});
            this.setState({ images: response.data});
        }else{
            if(term==="Castando Gelo" || term === "castando gelo" || term === "Castando gelo"){
                window.location.href='https://castandogelo.home.blog/'
            }
            const response = await Unsplash.get('/name/' +term,{
            });
            console.log(response.data);
            this.setState({ images: response.data});
        }
    }


    helperFunction () {
        if ( this.state.search===false){
            return(
                <div className="ui container" >
                    <h1 className="search-text">You can Search your favorite Digimons from season 1 and 2 </h1>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                    <ImageList images={this.state.images}/>
                </div>
            );
        }
        if( this.state.search===true){
            return <div><Spinner loadText="Searching Digimon"/></div>;
        }

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

export default Search;