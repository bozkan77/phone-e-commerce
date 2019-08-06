import React from 'react'

const CartItem = ({item, value}) => {
  const {id, title, img, price, total, count} = item;
  const {increment, decrement, removeItem} = value;
  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-quto col-lg-2">
        <img src={img} alt={title}  className="img-fluid" style={{width:"5rem", height:"5rem"}} />
      </div>
      <div className="col-10 mx-quto col-lg-2">
        <span className="d-lg-none">Ürün:</span>
        {title}
      </div>
      <div className="col-10 mx-quto col-lg-2">
        <span className="d-lg-none">price:</span>
        {price} TL
      </div>
      <div className="col-10 mx-quto col-lg-2">
        <div className="d-flex justify-content-center">
          <div className="">
            <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
            <span className="cart-count mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
          </div>
        </div>
        
      </div>
      <div className="col-10 mx-quto col-lg-2 text-center">
          <div className="cart-icon" onClick={()=> removeItem(id)}>
            <i className="fa fa-trash"></i>
          </div>
        </div>
      <div className="col-10 mx-quto col-lg-2">
        <strong>Ürün Toplamı : {total} TL</strong>
      </div>
    </div>
  )
}

export default CartItem;