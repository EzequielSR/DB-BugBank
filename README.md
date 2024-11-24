# **DB-BugBank**

Este repositório contém a automação de testes funcionais para o site BugBank. A aplicação foi testada utilizando [Cypress](https://www.cypress.io/) e o foco principal foi validar as funcionalidades de **Cadastro**, **Login**, **Transferências** e **Extrato**.

---

## **📚Índice**
- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades Testadas](#funcionalidades-testadas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Como Executar](#como-executar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Licença](#licença)

---

## **💡Sobre o Projeto**
O BugBank é um site criado para treinar cenários de teste em um ambiente quase real. Este projeto tem como objetivo desenvolver e executar testes automatizados para garantir a integridade das principais funcionalidades da aplicação.

Os testes foram escritos para verificar tanto cenários positivos quanto negativos, cobrindo possíveis falhas que podem ocorrer durante o uso do sistema.

---

## **Funcionalidades Testadas**

1. **✅Cadastro de Usuário**
   - Criação de contas com ou sem saldo inicial.
   - Validação de campos obrigatórios.
   - Mensagens de erro para entradas inválidas.

2. **Login**
   - Login com credenciais válidas.
   - Mensagem de erro para credenciais inválidas.
   - Validação do redirecionamento para a página inicial.

3. **Transferências**
   - Transferências para outros usuários do BugBank.
   - Validação de saldos antes e depois da transferência.
   - Mensagens de erro para valores inválidos ou insuficientes.

4. **Extrato**
   - Consulta do histórico de transações.
   - Validação dos dados exibidos no extrato (valores, destinatários, datas).

---

## **👩‍💻Tecnologias Utilizadas**

- [Cypress](https://www.cypress.io/) - Framework de testes end-to-end.
- **JavaScript** - Linguagem utilizada para interações e automações específicas.
- [@fake-js/fake](https://www.npmjs.com/package/@fake-js/faker) - Para geração de dados fictícios.

---

## **📋Pré-requisitos**

Certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Cypress (será instalado via dependências do projeto)

---

## **🚀Como Executar**

1. Clone o repositório:
   ```bash
   git clone https://github.com/EzequielSR/DB-BugBank.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd DB-BugBank
   ```

3. Instale as depências:
   ```bash
   npm install
   ```
4. Execute os testes no Cypress:
   ```bash
   npx cypress open
   ```

   - Irá aparecer a interface do cypress. Selecione o E2E Testing para a execução da automação de teste.
   
   ![image](https://github.com/user-attachments/assets/05688133-8eef-4883-84bb-3e676da1ee46)

   -  Utilize o navegador de sua preferência. Para a execução dos testes utilizei o navegador Edge.

   ![image](https://github.com/user-attachments/assets/4b7c328b-7784-48fb-9223-165987a02b33)

   - Após a escolha do navegador será aberto uma janela com os arquivos para teste. Selecione o arquivo desejado e será rodado com sucesso.
     
   ![image](https://github.com/user-attachments/assets/6ce6412b-fcd2-4725-bb18-b4c16ede6c7d)

6. Execute os testes no modo headless:
   ```bash
   npx cypress run
   ```
   - Resultado dos testes:
   ![image](https://github.com/user-attachments/assets/cc5eecb6-c97e-418d-b6cd-525ed812c1dd)
   
---
## **📂Estrutura do Projeto**


---

## **🧾Licença**

Este projeto está licenciado sob a licença [MIT](LICENSE). Consulte o arquivo `LICENSE` para mais informações.
