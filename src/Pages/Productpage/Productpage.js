import React, { Component, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Productpage(){


  // constructor(props) {
  //   super();
  //   this.state = {
  //     products: [],
  //     productID: props.match.params.pid,
  //   };
  // }
const {pid: productID}= useParams()
 const [product, setProduct]= useState([])
useEffect(() => {
 fetch("http://localhost:3001/getiphones")
      .then((res) => res.json())
      .then((data) => {
        const productList = data;
        const singleProduct = productList.filter(
          (x) => x.product_id == productID
        );
setProduct(singleProduct)
      } )
}, [])

 
    // console.log(this.state.productID);
    return (
      <div>
        <section className="internal-page-wrapper top-100">
          <div className="container">
            {product?.map((product) => {
              let id = product.product_url;
              let title = product.product_name;
              let img = product.product_img;
              let Brief = product.product_brief_description;
              let StartPrice = product.starting_price;
              let PriceRange = product.price_range;
              let productPage = "/iphone/" + id;
              let details = product.product_description;

              let productDiv = (
                <div key={id} className="bottom-100">
                  <div className="row justify-content-center text-center bottom-50">
                    <div className="col-12">
                      <div className="title-wraper bold">{title}</div>
                      <div className="brief-description">{Brief}</div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price">{PriceRange}</div>
                      <div className="product-details">{details}</div>
                    </div>

                    <div className={`col-sm-12 col-md-6`}>
                      <div className="prodict-image">
                        <img src={img} />
                      </div>
                    </div>
                  </div>
                </div>
              );
              return productDiv;
            })}
          </div>
        </section>
      </div>
    );
  
};

export default Productpage;
