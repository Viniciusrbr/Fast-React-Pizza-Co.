/* eslint-disable react/no-unescaped-entities */
//import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Pronto para pedir ? Vamos lá !</h2>

      <Form method="POST">
        <div>
          <label>Primeiro nome</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Número de telefone</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <div>{formErrors.phone}</div>}
        </div>

        <div>
          <label>Endereço</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Quer dar prioridade ao seu pedido?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button
            disabled={isSubmitting}
            className="inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold
            uppercase tracking-wide text-stone-800 transition-colors
            hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring
            focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Fazendo pedido..." : "Pedir agora"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Número de telefone invalido. Por favor nos forneça um número válido, talvez precisemos entrar em contato com você.";
  if (Object.keys(errors).length > 0) return errors;

  // Se tudo estiver ok, cria o pedido e redireciona para a página do pedido
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
