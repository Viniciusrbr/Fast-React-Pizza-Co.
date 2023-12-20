import { useState } from "react";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Bem-vindo! Por favor, comece nos dizendo seu nome:
      </p>

      <input
        type="text"
        placeholder="Seu nome completo"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-72"
      />

      {username !== "" && (
        <div>
          <button>Comece a fazer o pedido</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
