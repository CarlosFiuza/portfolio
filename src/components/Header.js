import React from 'react';
import '../css/style.css';

export default () => {
    return (
        <header class="menu">
          <div class="menu-left">
            <a href="#container-info" class="link menu-1">Home</a>
            <a href="#section-03" class="link menu-2">About</a>
          </div>

          <div class="menu-logo menu-3">
            <h5>Carlos Fiuza.</h5>
          </div> 

          <div class="menu-right">
            <a href="https://github.com/CarlosFiuza" target="_blank" class="link menu-4">Works</a>
            <a href="#section-02" class="link menu-5">Contact</a>
          </div> 
        </header>
    );
};