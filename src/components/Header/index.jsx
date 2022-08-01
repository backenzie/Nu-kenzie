import "./styles.css";

export const Header = () => {
  return (
    <header className="header-container">
      <h1>
        Burguer<p>Kenzie</p>
      </h1>
      <div className="divButtonSearch">
        <input type="text" placeholder="Digitar Pesquisa" />
        <button>Pesquisar</button>
      </div>
    </header>
  );
};
