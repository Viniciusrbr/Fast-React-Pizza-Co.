// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

function Order() {
  const order = useLoaderData();

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Faltam Apenas ${calcMinutesLeft(estimatedDelivery)} minutos 😃`
            : "Order should have arrived"}
        </p>
        <p>(Entrega: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Valor da pizza: {formatCurrency(orderPrice)}</p>
        {priority && (
          <p>Valor da prioridade: {formatCurrency(priorityPrice)}</p>
        )}
        <p>Pagar na entrega: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
