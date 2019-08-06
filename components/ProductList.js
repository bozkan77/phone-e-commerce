import React, { Component } from 'react'

//custom components
import Product from './Product';
import Title from './Title';

// product consumer
import {ProductConsumer} from '../context';

// data
import {storeProducts} from '../data';

 class ProductList extends Component {
   state= {
     products: storeProducts
   };
   

  render() {
    return (
      <React.Fragment>
        <div className="py-5 product-list-container">
          <div className="container">
           <Title name="tüm" title="ürünler" />
           <div className="row">
             <ProductConsumer>
               {value=> {
                 return value.products.map(product => {
                   return <Product product={product} key={product.id}/>
                 })
               }}
             </ProductConsumer>
           </div>
          </div>
        </div>
      </React.Fragment>
      //<Product />
    )
  }
}

export default ProductList;