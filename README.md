# **BD-BugBank**

Este repositório contém a automação de testes funcionais para o site BugBank. A aplicação foi testada utilizando [Cypress](https://www.cypress.io/) e o foco principal foi validar as funcionalidades de **Cadastro**, **Login**, **Transferências** e **Extrato**.

---

## **📖Índice**
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

## **✅Funcionalidades Testadas**

1. **Cadastro de Usuário**
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
   
![image](https://github.com/user-attachments/assets/7ca98352-69ad-4937-af3e-a6cfc78301a7)

   - Utilize o navegador de sua preferência. Para a execução dos testes utilizei o navegador Edge.

   ![image](https://github.com/user-attachments/assets/fef5f7c7-7a03-4466-a934-f3d973cc2d5c)

   - Após a escolha do navegador será aberto uma janela com os arquivos para teste. Selecione o arquivo desejado e será rodado com sucesso.

     ![image](https://github.com/user-attachments/assets/8fd5a7db-af2b-4335-8b72-6335a2ade9df)

6. Execute os teste no modo headless:
   ```bash
   npx cypress run
   ```
   - Resultado dos testes:
     
   ![image](https://github.com/user-attachments/assets/4b592ffa-8227-4612-a305-87802e923d3c)


# **📂Estrutura do Projeto**
```plaintext
DB-BugBank/
├── cypress/
│   ├── e2e/
│   │   ├── cadastro.cy.ts       # Testes de Cadastro
│   │   ├── extrato.cy.ts        # Testes de Extrato
│   │   ├── login.cy.ts          # Testes de Login
│   │   └── transferencia.cy.ts  # Testes de Transferência
│   ├── fixtures/             # Dados de entrada para os testes
│   ├── support/              # Configurações e comandos personalizados
├── node_modules/             # Dependências do projeto
├── .gitignore                # Arquivos dispensáveis
├── cypress.config.ts         # Configurações do Cypress
├── package.json              # Gerenciador de dependências
├── README.md                 # Documentação do projeto
```
---

## **🧾Licença**

Este projeto está licenciado sob a licença [MIT](LICENSE). Consulte o arquivo `LICENSE` para mais informações.
