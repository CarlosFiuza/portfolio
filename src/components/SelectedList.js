import React from 'react';
import '../css/style.css';
import Hortum from '../assets/hortum.png';
import Pokedex from '../assets/pokedex_logo.png'

export default () => {
    return (
        <section class="list" id="section-01">
            <div class="list-item">
                <h2>Selected Works</h2>
            </div>

            <div class="list-item py-6">
                <h5 class="color-gray mr-2" >01.</h5>
                <a href="https://github.com/fga-eps-mds/2020.2-Hortum" target="_blank"> <h3>Hortum-Backend</h3> </a>
                <img class="img-project" src={Hortum} alt=""/>
            </div>

            <div class="bb-gray"/>

            <div class="list-item py-6">
                <h5 class="color-gray mr-2" >02.</h5>
                <a href="https://github.com/fga-eps-mds/2020.2-Hortum-Mobile" target="_blank"> <h3>Hortum-Frontend</h3> </a>
                <img class="img-project" src={Hortum} alt=""/>
            </div>
            <div class="bb-gray"/>

            <div class="list-item py-6">
                <h5 class="color-gray mr-2" >03.</h5>
                <a href="https://github.com/CarlosFiuza/pokedex" target="_blank"> <h3>Pokedex</h3> </a>
                <img class="img-project" src={Pokedex} alt=""/>
            </div>
            <div class="bb-gray"/>
        </section>
    );
};