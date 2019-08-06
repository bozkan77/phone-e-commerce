import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// context
import {ProductConsumer} from '../context';

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
       {(value)=> {
         const {modalOpen, closeModal} = value;
         const {img, title, price} = value.modalProduct;
         if(!modalOpen){
           return null;
         }else {
           return(
             <div className="modal-darkness">
              <div className="container">
                <div className="row">
                  <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize modal-container" id="modal">
                    <h3>Ürün sepete eklendi</h3>
                    
                    <img src={img} className="img-fluid" alt={title}/>
                    <h2>{title}</h2>
                    <h2 className="text-muted">{price} TL</h2>
                    <div className="button-container">
                      <Link to="/">
                        <button className="btn keep-shopping" onClick={()=>closeModal()}>Alışverişe Devam Et</button>
                      </Link>
                      <Link to="/Cart">
                        <button className="btn go-to-cart" onClick={()=>closeModal()}>Sepete Git</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
           );
         }
       }}
      </ProductConsumer>
    )
  }
}

export default Modal;