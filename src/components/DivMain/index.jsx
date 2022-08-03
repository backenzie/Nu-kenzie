import { useState } from "react";
import "./styles.css";
import "./styleCart.css";

export const DivMain = ({ products }) => {
  const [cartProducts, setCartProducts] = useState([]);

  console.log(cartProducts);

  function addProduct(product) {
    const result = cartProducts.filter(
      (produto) => product.name !== produto.name
    );
    return setCartProducts([...result, product]);
  }

  function removeToCart(product) {
    const newCardProducts = cartProducts.filter(
      (produto) => produto.name !== product.name
    );
    setCartProducts(newCardProducts);
  }

  function removeAllCartItens() {
    const emptyList = cartProducts.filter(
      (produto) => produto.name === "Nao te quero aqui"
    );
    setCartProducts(emptyList);
  }

  function totalValue() {
    const valor = cartProducts.reduce((acc, produto) => {
      return acc + parseInt(produto.price);
    }, 0);
    return valor;
  }

  return (
    <div className="divMain">
      <ul className="ulProducts">
        {" "}
        {products.map((produto, indice) => {
          return (
            <li key={indice} className="liCard">
              <div className="divIMG">
                <img src={produto.img} alt="" />
              </div>
              <div className="divInfo">
                <h1>{produto.name}</h1>
                <p>{produto.category}</p>
                <span>
                  R$ <p>{produto.price}</p>
                </span>
                <button onClick={() => addProduct(produto)}>Adicionar</button>
              </div>
            </li>
          );
        })}{" "}
      </ul>
      <div className="divCart">
        <p>Carrinho de Compras</p>
        <ul className="ulCart">
          {cartProducts.map((produto, i) => {
            return (
              <li key={i} className="liCart">
                <div className="divImg">
                  <img src={produto.img} alt={produto.name} />
                </div>

                <div className="divTextProduct">
                  <h3>{produto.name}</h3>
                  <p>{produto.category}</p>
                </div>
                <button
                  className="button"
                  onClick={() => {
                    removeToCart(produto);
                  }}
                >
                  Remover
                </button>
              </li>
            );
          })}
        </ul>
        <div className="DivPrice">
          <p>
            Total <span>R$ {totalValue()}</span>
          </p>
          <button
            onClick={() => {
              removeAllCartItens();
            }}
          >
            Remover Todos
          </button>
        </div>
      </div>
    </div>
  );
};
