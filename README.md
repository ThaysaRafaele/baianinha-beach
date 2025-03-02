# **Baianinha Beach - Carrinho de Compras**

Este é o projeto de e-commerce **Baianinha Beach**, desenvolvido para vender biquínis e acessórios de praia. <br>
O projeto está bem simples pois foi uma solução rápida para minha irmâ poder iniciar as vendas em sua loja. <br>
Disponível em: https://baianinha-beach-moda.vercel.app/

## **Tecnologias Utilizadas**

- **React**: Para a criação da interface de usuário (UI).
- **Styled Components**: Para estilizar os componentes de forma modular.
- **React Icons**: Para ícones de interação, como o ícone de lixeira e botões de incremento e decremento.
- **Context API**: Para gerenciar o estado global do carrinho e compartilhar dados entre os componentes.
- **LocalStorage**: Para persistir os itens do carrinho mesmo após recarregar a página.
- **Hooks do React**: Para gerenciar o estado e interações do carrinho.

## **Funcionalidades**

- **Adicionar ao Carrinho**: Os usuários podem adicionar produtos ao carrinho de compras, incluindo detalhes como tamanho, cor e quantidade.
- **Alterar Quantidade**: Os usuários podem aumentar ou diminuir a quantidade de um item no carrinho.
- **Remover Itens**: Os usuários podem remover itens do carrinho a qualquer momento.
- **Resumo da Compra**: Exibe o resumo do carrinho com o preço total e os itens selecionados.
- **Formas de Pagamento**: Os usuários podem escolher entre as formas de pagamento disponíveis (Crédito, Débito, Pix) antes de finalizar a compra.
- **Finalizar Compra via WhatsApp**: O carrinho gera um link com todos os itens do carrinho e a forma de pagamento escolhida, permitindo que o usuário finalize a compra diretamente via WhatsApp.
- **Carrinho Vazio**: Exibe uma mensagem amigável quando o carrinho está vazio, incentivando o usuário a continuar comprando.

## **Instruções de Instalação**

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/baianinha-beach.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd baianinha-beach
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

5. Abra o navegador e acesse o endereço `http://localhost:3000` para visualizar o projeto.

## **Estrutura do Projeto**

```
/src
  /components
    /CartItem           # Componente para exibir cada item do carrinho
    /CartSummary        # Componente para exibir o resumo da compra
    /Cart               # Componente principal do carrinho
  /hooks
    /useCart            # Hook personalizado para gerenciar o carrinho
  /pages
    /Products           # Página de listagem de produtos
  /styles               # Estilos globais e componentes estilizados
  /utils                # Funções utilitárias para manipulação de dados
  App.tsx               # Componente principal do app
  index.tsx             # Ponto de entrada da aplicação
```

## **Como Contribuir**

1. Faça um fork do repositório.
2. Crie uma branch para a sua feature (`git checkout -b minha-feature`).
3. Faça as modificações desejadas.
4. Envie um pull request para o branch principal.

## **Licença**

Este projeto está licenciado sob a [MIT License](LICENSE).
