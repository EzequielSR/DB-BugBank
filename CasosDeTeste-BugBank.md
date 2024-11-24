# **📋 Casos de Teste - BugBank**
## **Ambiente**: Web, Navegador Chrome 99, Mobile  
## **Autor**: Ezequiel 

Este arquivo contém a documentação detalhada dos casos de teste aplicados ao projeto **BugBank**.

---

## **📚 Índice**
1. [Cenário de Teste 1 - Login com Dados Inválidos](#cenário-de-teste-1---login-com-dados-inválidos)
2. [Cenário de Teste 2 - Cadastro com Dados Incompletos](#cenário-de-teste-2---cadastro-com-dados-incompletos)
3. [Cenário de Teste 3 - Transferência com Falhas](#cenário-de-teste-3---transferência-com-falhas)
4. [Cenário de Teste 4 - Extrato com Dados Incorretos](#cenário-de-teste-4---extrato-com-dados-incorretos)
5. [Cenário de Teste 5 - Login com Sucesso](#cenário-de-teste-5---login-com-sucesso)
6. [Cenário de Teste 6 - Cadastro com Sucesso](#cenário-de-teste-6---cadastro-com-sucesso)
7. [Cenário de Teste 7 - Transferência com Sucesso](#cenário-de-teste-7---transferência-com-sucesso)
8. [Cenário de Teste 8 - Verificação de Extrato com Sucesso](#cenário-de-teste-8---verificação-de-extrato-com-sucesso)
9. [Observações](#-observações)

---

## **📝 Descrição dos Casos de Teste**

---

### **Cenário de Teste 1 - Login com Dados Inválidos**
**ID:** CT-005  
**Título:** Tentativa de Login com Dados Inválidos  

**Pré-condições:**  
- Usuário não está logado  
- Usuário possui ou não uma conta cadastrada  

**Passos:**

| Passo | Descrição                                                                 | Resultado Esperado                                   |
|-------|---------------------------------------------------------------------------|----------------------------------------------------|
| 1     | Acesse a página de login                                                 | Tela de login é carregada corretamente             |
| 2     | Insira um email válido e uma senha incorreta e clique em "Entrar"        | Mensagem de erro: "Usuário e/ou senha inválidos"   |
| 3     | Insira um email inexistente no campo de email e clique em "Entrar"       | Mensagem de erro: "Usuário e/ou senha inválidos"   |
| 4     | Tente fazer login sem preencher os campos obrigatórios                   | Mensagem de erro: "Usuário e senha precisam ser preenchidos" |

**Pós-condições:**  
- O usuário permanece na tela de login  

---

### **Cenário de Teste 2 - Cadastro com Dados Incompletos**
**ID:** CT-006  
**Título:** Tentativa de Cadastro com Dados Incompletos  

**Pré-condições:**  
- Usuário não está logado  
- Nenhuma conta cadastrada  

**Passos:**

| Passo | Descrição                                                               | Resultado Esperado                               |
|-------|-------------------------------------------------------------------------|------------------------------------------------|
| 1     | Acesse a página de cadastro                                             | Tela de cadastro é carregada corretamente       |
| 2     | Deixe o campo de nome vazio e clique em "Cadastrar"                     | Mensagem de erro: "Nome não pode ser vazio"     |
| 3     | Deixe o campo de email vazio e clique em "Cadastrar"                    | Mensagem de erro: "Email não pode ser vazio"    |
| 4     | Preencha email inválido (ex: "email@semformato") e clique em "Cadastrar" | Mensagem de erro: "Email inválido"             |
| 5     | Preencha senha e confirmação de senha diferentes e clique em "Cadastrar" | Mensagem de erro: "Senhas não conferem"        |
| 6     | Marque a opção "Criar conta com saldo", preencha tudo corretamente e clique em "Cadastrar" | Conta criada com sucesso com saldo de R$ 1.000,00 |
| 7     | Desmarque a opção "Criar conta com saldo", preencha tudo corretamente e clique em "Cadastrar" | Conta criada com sucesso com saldo de R$ 0,00 |

**Pós-condições:**  
- Apenas os cadastros válidos são criados com sucesso  

---

### **Cenário de Teste 3 - Transferência com Falhas**
**ID:** CT-007  
**Título:** Tentativa de Transferência com Falhas  

**Pré-condições:**  
- Usuário logado com saldo insuficiente  
- Conta de destino inválida ou inexistente  

**Passos:**

| Passo | Descrição                                                                 | Resultado Esperado                                   |
|-------|---------------------------------------------------------------------------|----------------------------------------------------|
| 1     | Acesse a página de transferência                                         | Tela de transferência é carregada corretamente     |
| 2     | Insira um valor maior do que o saldo disponível                          | Mensagem de erro: "Saldo insuficiente"             |
| 3     | Insira um número de conta inválido (ex: letras ou símbolos) e clique em "Transferir" | Mensagem de erro: "Conta inválida ou inexistente" |
| 4     | Deixe o campo de descrição vazio e clique em "Transferir"                | Mensagem de erro: "Descrição é obrigatória"        |
| 5     | Insira um valor negativo ou zero para transferência e clique em "Transferir" | Mensagem de erro: "Valor deve ser maior que zero" |

**Pós-condições:**  
- Nenhuma transferência é realizada com dados inválidos  

---

### **Cenário de Teste 4 - Extrato com Dados Incorretos**
**ID:** CT-008  
**Título:** Verificação do Extrato com Dados Incorretos  

**Pré-condições:**  
- Usuário logado com histórico de transações incompleto  

**Passos:**

| Passo | Descrição                                                                 | Resultado Esperado                                   |
|-------|---------------------------------------------------------------------------|----------------------------------------------------|
| 1     | Acesse a página de extrato                                               | Página de extrato é carregada corretamente         |
| 2     | Verifique o saldo exibido                                                | Saldo é atualizado corretamente com base nas transações |
| 3     | Verifique uma transação sem descrição                                    | Exibe "-" como descrição padrão                    |
| 4     | Verifique uma transação com valor negativo                               | Aparece em vermelho com sinal de menos (-)         |
| 5     | Verifique uma transação com valor positivo                               | Aparece em verde                                   |

**Pós-condições:**  
- Extrato exibe todas as transações realizadas pelo usuário  

---

### **Cenário de Teste 5 - Login com Sucesso**
**ID:** CT-009  
**Título:** Realizar Login com Dados Válidos  

**Pré-condições:**  
- O usuário já possui uma conta cadastrada  
- As credenciais de login estão corretas  

**Passos:**

| Passo | Descrição                      | Resultado Esperado                                |
|-------|--------------------------------|-------------------------------------------------|
| 1     | Acesse a página de login      | Tela de login é carregada corretamente          |
| 2     | Insira um email válido         | Campo de email aceita o dado inserido           |
| 3     | Insira a senha correspondente  | Campo de senha aceita o dado inserido           |
| 4     | Clique no botão "Entrar"       | Usuário é redirecionado para a página inicial   |

**Pós-condições:**  
- O usuário está autenticado com sucesso  

---

### **Cenário de Teste 6 - Cadastro com Sucesso**
**ID:** CT-010  
**Título:** Realizar Cadastro com Dados Válidos  

**Pré-condições:**  
- O usuário não possui conta cadastrada  

**Passos:**

| Passo | Descrição                                                                | Resultado Esperado                                      |
|-------|--------------------------------------------------------------------------|-------------------------------------------------------|
| 1     | Acesse a página de cadastro                                              | Tela de cadastro é carregada corretamente             |
| 2     | Preencha todos os campos obrigatórios corretamente                       | Campos aceitam os dados válidos inseridos             |
| 3     | Ative a opção "Criar conta com saldo" e clique em "Cadastrar"            | Conta criada com saldo inicial de R$ 1.000,00         |
| 4     | Preencha novamente os campos, desative a opção "Criar conta com saldo" e clique em "Cadastrar" | Conta criada com saldo inicial de R$ 0,00             |

**Pós-condições:**  
- O usuário recebe a mensagem de sucesso com o número da conta criada  

---

### **Cenário de Teste 7 - Transferência com Sucesso**
**ID:** CT-011  
**Título:** Realizar Transferência com Dados Válidos  

**Pré-condições:**  
- O usuário está logado  
- O saldo é suficiente para a transferência  
- O número da conta de destino é válido  

**Passos:**

| Passo | Descrição                                                                | Resultado Esperado                                      |
|-------|--------------------------------------------------------------------------|-------------------------------------------------------|
| 1     | Acesse a página de transferência                                         | Tela de transferência é carregada corretamente        |
| 2     | Preencha o número da conta de destino com dados válidos                  | Campo aceita o número da conta válido                 |
| 3     | Preencha o campo descrição com dados válidos                             | Campo aceita a descrição                              |
| 4     | Insira um valor menor ou igual ao saldo disponível e clique em "Transferir" | Valor é debitado da conta e exibida mensagem de sucesso |
| 5     | Verifique o saldo após a transferência                                   | Saldo atualizado corretamente                         |

**Pós-condições:**  
- A transferência é registrada com sucesso e reflete no extrato  

---

### **Cenário de Teste 8 - Verificação de Extrato com Sucesso**
**ID:** CT-012  
**Título:** Consultar Extrato com Dados Válidos  

**Pré-condições:**  
- O usuário está logado  
- Existe histórico de transações na conta  

**Passos:**

| Passo | Descrição                                                                | Resultado Esperado                                      |
|-------|--------------------------------------------------------------------------|-------------------------------------------------------|
| 1     | Acesse a página de extrato                                               | Página de extrato é carregada corretamente            |
| 2     | Verifique as transações exibidas                                         | Todas as transações são exibidas corretamente         |
| 3     | Confirme que transações de débito aparecem em vermelho com sinal de menos (-) | Valores debitados exibidos corretamente               |
| 4     | Confirme que transações de crédito aparecem em verde                    | Valores creditados exibidos corretamente             |

**Pós-condições:**  
- O extrato exibe corretamente todas as transações do usuário  
---

## **🔍 Observações**
- **Ambiente de Teste**: Como o site não conta com banco de dados e usa armazenamento local, os testes precisam ser realizados em uma mesma sessão ou verificar o comportamento do armazenamento local no navegador.
  
- **Ferramentas sugeridas**: Para validar as requisições (se for possível testar APIs), utilize ferramentas como Postman ou Insomnia.

- **Automação de Testes**: Considere utilizar Cypress para automatizar os cenários acima.

- Garanta que todos os cenários considerem testes negativos (ex: campos vazios ou dados inválidos).

---

