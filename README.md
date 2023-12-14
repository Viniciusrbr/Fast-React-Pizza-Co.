<h1>React Fast React Pizza Co🍕</h1>
<h2>⏳ Projeto ainda em construção...</h2>
<h3>🎯 Requisitos</h3>
<ol>
    <li>Aplicativo muito simples, onde os usuários podem fazer pedidos de uma ou mais pizzas de um menu;</li>
    <li>Não requer contas de usuário nem login: os usuários apenas inserem seus nomes antes de usar o aplicativo;</li>
    <li>O menu de pizzas pode mudar, então ele deve ser carregado de uma API;</li>
    <li>Os usuários podem adicionar várias pizzas a um carrinho antes de fazer o pedido;</li>
    <li>Fazer um pedido requer apenas o nome do usuário, número de telefone e endereço;</li>
    <li>Se possível, a localização de GPS também deve ser fornecida para facilitar a entrega;</li>
    <li>Os usuários podem marcar seu pedido como "prioridade" por um adicional de 20% do preço do carrinho;</li>
    <li>Os pedidos são feitos enviando uma solicitação POST com os dados do pedido (dados do usuário + pizzas selecionadas) para a API;</li>
    <li>Os pagamentos são feitos na entrega, portanto, não é necessário processamento de pagamento no aplicativo;</li>
    <li>Cada pedido receberá um ID exclusivo que deve ser exibido, para que o usuário possa consultar seu pedido com base no ID;</li>
    <li>Os usuários devem ser capazes de marcar seu pedido como "prioridade" mesmo depois de ter sido feito;</li>
</ol>

<h3>🛠 Funcionalidades + Páginas</h3>

| Categoria das Funcionalidades | Páginas Necessárias                  |
| ----------------------------- | ------------------------------------ |
| User                          | Homepage - /                         |
| Menu                          | Pizza menu - /menu                   |
| Cart                          | Carrinho - /cart                     |
| Order                         | Fazer novo pedido - /order/new       |
| Order                         | Procurar um pedido - /order/:orderID |

<h3>🛠 Gerenciamento de Estados Globais</h3>

| UI                       | Remotos                              |
| ------------------------ | ------------------------------------ |
| User - Fica salvo no APP | Menu - É obtido da API               |
| Cart - Fica salvo no APP | Order - Buscados e enviados para API |

<h3>🛠️ Tecnologias Utilizadas</h3>
<ul>
    <li>React Router ( Rotas e Gerenciamento de Estados Remotos )</li>
    <li>Tailwind CSS ( estilização )</li>
    <li>Redux ( Gerenciamento de Estados da UI )</li>
</ul>
