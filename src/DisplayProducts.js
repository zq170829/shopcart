import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function DisplayProducts(props) {
  const [show, setShow] = useState(false);
  // const [sortType, setSortType] = useState("asc");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="p-5">
        <span>Sort Price By: </span>
        <select onChange={(e) => props.onSort(props.products, e.target.value)}>
          <option value="">Normal</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div>
        {props.products.map((product) => {
          return (
            <>
              <div key={product.id} className="border border-1 p-3">
                <h4 className="mx-5">
                  {product.desc}
                  <span className="text-danger mx-3 fs-5">
                    ${product.price}
                  </span>
                </h4>
                <img
                  onClick={() => handleShow(product)}
                  src={product.image}
                  width="150"
                  alt={product.desc}
                  className="mx-5"
                />
                <button
                  className="btn btn-secondary mx-2"
                  onClick={() => props.increaseBtn(product)}
                >
                  <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" />
                </button>
                <button
                  className="btn btn-secondary mx-2"
                  onClick={() => props.decreaseBtn(product)}
                >
                  <FontAwesomeIcon icon={faMinusCircle} className="fas fa-lg" />
                </button>
                <span id="qty" className="mx-5 p-3 border border-3">
                  {product.value}
                </span>
                quantity
              </div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{product.desc}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src={product.image}
                    width="350"
                    alt={product.desc}
                    className="mx-5"
                  />
                  <p>Rating: {product.ratings}</p>
                </Modal.Body>
              </Modal>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayProducts;
