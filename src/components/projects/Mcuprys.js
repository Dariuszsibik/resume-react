
import React, { Component } from 'react';
import classNames from 'classnames';
import Logo from '../../img/mcuprys.jpg'

export default class Mcuprys extends Component {

  render() {

    return (
              <div className="projects-container">
                <div className="card-container">
                  <div className="card-body">
                    <div className="card-side side-front">
                      <div className="container-fluid">
                        <img className="card-front-img" src={Logo}/>
                        <div className="side-front-content">
                          <h3>Przewodnik Po Krakowie</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-side side-back">
                      <div className="container-fluid">
                        <h3 className="card-title">Przewodnik po Krakowie</h3>
                        <p className="card-text">Strona internetowa oparta na systemie CMS Wordpress. </p>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Wordpress</li>
                          <li className="list-group-item">Javascript</li>
                          <li className="list-group-item">PHP</li>
                        </ul>
                        <a href="#" className="btn btn-primary">Zobacz stronę</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    );
  }
}
