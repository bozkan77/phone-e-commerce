import React, { Component } from 'react'
import  { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

// custom button


class Product extends Component {
  render() {
    const {id, title, img, price,inCart} = this.props.product
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 mb-4">
        <div  className="card">
          <ProductConsumer>
            {value => (
                <div className="img-container p-5" onClick={()=> value.handleDetail(id)}>
                  <Link to="/details">
                    <img src={img} alt="product"  className="card-img-top" />
                  </Link>
                  <button className="cart-btn btn" disabled={inCart?true:false} onClick={()=>{
                    value.addToCart(id);
                    value.openModal(id);
                    }}>
                    {inCart ? (<p className="text-capitalize mb-0" disabled>{" Sepette "}</p>):(<i className="fa fa-cart-plus" />)}
                  </button>
                </div>
              )}
          </ProductConsumer>
          {/* {card footer} */}
          <div className="card-footer d-flex justify-content-between">
            <p classame="align-self-center mb-0">{title}</p>
            <h3 className="color-blue--dark font-italic mb-0">
              {price} 
              <span className="ml-1">TL</span>
            </h3>
          </div>
        </div>
        
      </div>
    )
  }
}

Product.propTypes = {
  product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired
}

export default Product;