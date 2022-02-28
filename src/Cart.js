import FacebookLogin from "react-facebook-login";
import { Modal } from "react-bootstrap";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckOut from "./CheckOut";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaTrash } from "react-icons/all";

export default function Cart(props) {
  return (
    <div className="m-5 px-5 w-75">
      {props.ItemCount === 0 ? (
        <Empty products={props.products} ItemCount={props.ItemCount} />
      ) : (
        <DisplayCart
          removeBtn={props.removeBtn}
          products={props.products}
          ItemCount={props.ItemCount}
        />
      )}
    </div>
  );
}

function Empty(props) {
  return (
    <div>
      <h2>Your Cart is Empty </h2>
      <span>There are </span>
      {props.ItemCount}
      <span> item in your cart</span>
      <div className="mt-3">
        <Link to="/">
          <button href="/" className="btn btn-info">
            Continue Shop
          </button>
        </Link>
      </div>
    </div>
  );
}

function DisplayCart(props) {
  return (
    <div className="w-150">
      <h2>Your Cart Items</h2>
      {props.products.map((prod) => {
        if (prod.value > 0) {
          return (
            <div key={prod.id} className="border">
              <img src={prod.image} alt={prod.desc} width="150" />
              <p className="qty d-inline mx-5">Quantity: {prod.value}</p>
              <FaTrash
                size={20}
                color="var(--text)"
                style={{ cursor: "pointer" }}
                onClick={() => props.removeBtn(prod)}
              />
              <p className="px-4">{prod.desc}</p>
            </div>
          );
        }
      })}
      <Link to="/Checkout">
        <button href="/Checkout" className="mt-5 btn btn-primary">
          Check Out
        </button>
      </Link>
    </div>
  );
}
