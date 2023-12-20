import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div>
      <Link to="/menu">&larr; Voltar ao menu</Link>

      <p>Seu carrinho ainda está vazio. Comece a adicionar algumas pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
