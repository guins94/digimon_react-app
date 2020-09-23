import React from 'react';
import history from '../history';

var breadStyle = {
    width: "100%",
    height: "100%",
    opacity:0.8,
};


class BreadCrumb extends React.Component {

    searchPage  = (event) => {
        history.push({
            pathname: '/Search',
            })
    }

    freshPage  = (event) => {
        history.push({
            pathname: '/Fresh',
            })
    }

    TrainingPage  = (event) => {
        history.push({
            pathname: '/Training',
            })
    }

    RookiePage  = (event) => {
        history.push({
            pathname: '/Rookie',
            })
    }

    UltimatePage  = (event) => {
        history.push({
            pathname: '/Ultimate',
            })
    }

    ChampionPage  = (event) => {
        history.push({
            pathname: '/Champion',
            })
    }

    MegaPage  = (event) => {
        history.push({
            pathname: '/Mega',
            })
    }

    render() {
        return (
            <div class="ui breadcrumb big" style={breadStyle }>
                <a class="active section" onClick={this.searchPage}>Search</a>
                <div class="divider"> / </div>
                <a class="section" onClick={this.freshPage}>Fresh </a>
                <div class="divider"> / </div>
                <a class="section" onClick={this.TrainingPage}>Training</a>
                <div class="divider"> / </div>
                <a class="section" onClick={this.RookiePage }>Rookie</a>
                <div class="divider"> / </div>
                <a class="section" onClick={this.ChampionPage}>Champion</a>
                <div class="divider"> / </div>
                <a class="section" onClick={this.UltimatePage}>Ultimate</a>
                <div class="divider"> / </div>
                <a class="section" onClick={this.MegaPage}>Mega</a>
            </div>
        );
    }
}

export default BreadCrumb;