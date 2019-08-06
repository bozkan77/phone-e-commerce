import React from 'react';
import {Link} from 'react-router-dom';

const CartTotals = ({value}) => {
  const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
  return (
    <div>
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-col-md-auto col-sm-8 text-capitalize text-right">
              <Link to='/'>
              <button className="btn btn-outline-danger text-uppercase mb-3" 
                type="button"
                onClick={()=> clearCart()}>Sepeti Sil</button>
              </Link>
              <h5>
                <span className="title-text">Aratoplam : <strong>{cartSubTotal} TL</strong></span>
              </h5>
              <h5>
                <span className="title-text">KDV : <strong>{cartTax} TL</strong></span>
              </h5>
              <h5>
                <span className="title-text">Toplam : <strong>{cartTotal} TL</strong></span>
              </h5>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  )
}

export default CartTotals;