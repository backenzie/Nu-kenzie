import "./styles.css";

export const DivMain = ({ products }) => {
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
                <button>Adicionar</button>
              </div>
            </li>
          );
        })}{" "}
      </ul>
      <div className="divCart">
        <p>Carrinho de Compras</p>
        <ul className="ulCart"></ul>
        <div className="DivPrice">
          <p>
            Total <span>R$ {}</span>
          </p>
          <button>Remover Todos</button>
        </div>
      </div>
    </div>
  );
};
