import "bootstrap/dist/css/bootstrap.min.css";
import {
  faShoppingCart,
  faRegistered
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import Cart from "./Cart";
import DisplayProducts from "./DisplayProducts";
import CheckOut from "./CheckOut";

function Nav(props) {
  return (
    <div>
      <Router>
        <div className="navbar p-5 bg-info">
          <h1>
            <Link to="/" className="text-decoration-none text-white">
              <span className="px-2">Shop 2</span>
              <FontAwesomeIcon
                icon={faRegistered}
                className="fas fa-lg text-white"
              />
              eact
            </Link>
          </h1>
          <p className="text-white">
            <Link to="/showcart">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="fas fa-lg mx-3 text-white"
              />
            </Link>
            <span className="font-weight-bold text-white">
              {props.ItemCount}
            </span>
            <span> items</span>
          </p>
        </div>

        <Switch>
          <Route exact path="/">
            <DisplayProducts
              products={props.prods}
              increaseBtn={props.increaseBtn}
              decreaseBtn={props.decreaseBtn}
              onSort={props.onSort}
              sortType={props.sortType}
            />
          </Route>
          <Route path="/showcart">
            <Cart
              products={props.prods}
              removeBtn={props.removeBtn}
              ItemCount={props.ItemCount}
            />
          </Route>
          <Route path="/checkout">
            <CheckOut />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Nav;
