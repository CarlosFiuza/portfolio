import React from 'react';
import '../css/style.css';
import MyPhoto from '../assets/myPhoto.svg';

export default () => {
    return (
        <section class="container hero" id='container-info'>
            <div class="container-item">
            <div>
                <h1>Carlos Eduardo</h1>
            </div>
            <div>
                <h2 class="mask text-right mt-7">Software Enginner Student</h2>
            </div>
            <div>
                <h2 class="mask">Front-End Developer</h2>
            </div>

            <div class="flex-end pr-9">
                <a href="https://github.com/CarlosFiuza" target="_blank" class="square text-center">WORKS</a>
            </div>

            </div>

            <div class="container-item">
            <img src={MyPhoto} style={{maxWidth: 400}}/>
            </div>
        </section>    
    );
};