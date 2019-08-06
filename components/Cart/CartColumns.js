import React from 'react'

const CartColumns = () =>  {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-quto col-lg-2">
          <p className="">Ürün</p>
        </div>
        <div className="col-10 mx-quto col-lg-2">
          <p className="">Ürün ismi</p>
        </div>
        <div className="col-10 mx-quto col-lg-2">
          <p className="">Fiyat</p>
        </div>
        <div className="col-10 mx-quto col-lg-2">
          <p className="">Adet</p>
        </div>
        <div className="col-10 mx-quto col-lg-2">
          <p className="">Sil</p>
        </div>
        <div className="col-10 mx-quto col-lg-2">
          <p className="">Toplam</p>
        </div>
      </div>
    </div>
  )
}

export default CartColumns;