import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { products } from "./products";
import Nav from "./Nav";
// import DisplayProducts from "./DisplayProducts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: products
    };
  }

  increaseBtn = (addvalue) => {
    if (addvalue.value < 10) {
      const updateValue = addvalue.value++;
      this.setState({ updateValue });
    }
  };

  decreaseBtn = (subvalue) => {
    if (subvalue.value > 0) {
      const updateValue = subvalue.value--;
      this.setState({ updateValue });
    }
  };

  // removeBtn = (rmvvalue) => {
  //   if (rmvvalue.value > 0) {
  //     // const updateValue = rmvvalue.value - rmvvalue.value;
  //     const updateValue = 0;
  //     this.setState({ updateValue });
  //   }
  // };

  onSort = (listNum, sortType) => {
    switch (sortType) {
      case "lowest":
        listNum.sort((a, b) => {
          if (a === b) return 0;
          return a.price - b.price;
        });
        break;
      case "highest":
        listNum.sort((a, b) => {
          if (a === b) return 0;
          return b.price - a.price;
        });
        break;
      default:
        listNum.sort((a, b) => {
          return b.id - a.id;
        });
    }
    this.setState({ items: listNum, sortType: sortType });
  };

  render() {
    return (
      <div className="shop_cart">
        <Nav
          ItemCount={this.state.items
            .map((prod) => prod.value)
            .reduce((acc, curr) => acc + curr, 0)}
          prods={this.state.items}
          increaseBtn={this.increaseBtn}
          decreaseBtn={this.decreaseBtn}
          removeBtn={this.removeBtn}
          onSort={this.onSort}
          sortType={this.sortType}
        />
        {/* <DisplayProducts
          prods={this.state.items}
          increaseBtn={this.increaseBtn}
          decreaseBtn={this.decreaseBtn}
        /> */}
      </div>
    );
  }
}

// function Nav(props) {
//   return (
//     <div className="navbar p-5 bg-info">
//       <h1>
//       <span className="px-2">Shop 2 </span>
//       <FontAwesomeIcon icon={faRegistered} className="fas fa-lg text-white" />
//       eact
//       </h1>

//       <div>
//       <FontAwesomeIcon icon={faShoppingCart} />
//         <span className="">{props.ItemCount} Items</span>
//       </div>
//     </div>
//   );
// }

// function DisplayProducts(props) {
//   return (
//     <div>
//       {props.prods.map((product) => {
//         return (
//           <div key={product.id} className="border border-1 p-3">
//             <h4 className="mx-5">{product.desc}</h4>
//             <img
//               src={product.image}
//               width="150"
//               alt={product.desc}
//               className="mx-5"
//             />
//             <button
//               className="btn btn-secondary mx-2"
//               onClick={() => props.increaseBtn(product)}
//             >
//               <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" />
//             </button>
//             <button
//               className="btn btn-secondary mx-2"
//               onClick={() => props.decreaseBtn(product)}
//             >
//               <FontAwesomeIcon icon={faMinusCircle} className="fas fa-lg" />
//             </button>
//             <span id="qty" className="mx-5 p-3 border border-3">
//               {product.value}
//             </span>
//             quantity
//           </div>
//         );
//       })}
//     </div>
//   );
// }

export default App;
