import React, { Component } from 'react'

class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title textuppercase pt-5">
            <h1 className="display-3">404</h1>
            <h1>Hata !</h1>
            <h2>Sayfa bulunamadı</h2>
            <h3>
              Aradığınız URL
              <span className="text-danger"> {this.props.location.pathname} </span>
              mevcut değil
            </h3>
          </div>
        </div>
      </div>
    )
  }
}
export default Default;
