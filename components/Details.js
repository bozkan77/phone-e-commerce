import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Button from './Button';

// context
import {ProductConsumer} from '../context';


class Details extends Component {

    
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {id, company,img,info,price,title,inCart} = value.detailProduct;
          return (
            <div className="contianer py-5">
              {/* Title */}
              <div className="col-10 mx-auto text-center text-slanted color-blue--dark my-5">
                <h1>{title}</h1>
              </div>
              {/* End Title */}
              {/* Product Info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt={title} />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h2>Model: {title}</h2>
                  <h4 className="text-tile text-uppercase text-muted mt-3 mb-2">
                    üretici: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="color-blue--dark">
                    <strong>Fiyat: {price} <span>TL</span></strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">ürün açıklaması</p>
                  <p className="text-muted lead">{info}</p>
                </div>
              </div>
              {/* Buttons */}
              <div>
               
                <Link to="/">
                  <Button className="asd" text="Ürünler" fontClassName="fa fa-angle-left mr-3" />
                </Link>
                <button className="btn" disabled={inCart ? true : false} onClick={()=> {
                  value.addToCart(id);
                  value.openModal(id);
                  }}>{inCart ? "Sepette" : "Sepete Ekle"}</button>
               
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}

export default Details;