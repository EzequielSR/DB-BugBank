# **📋 Casos de Teste - BugBank**

Este arquivo contém a documentação detalhada dos casos de teste aplicados ao projeto **BugBank**.

---

## **📚 Índice**
1. [Caso de Teste 1 - Login com credenciais válidas](#caso-de-teste-1---login-com-credenciais-válidas)
2. [Caso de Teste 2 - Login com credenciais inválidas](#caso-de-teste-2---login-com-credenciais-inválidas)
3. [Caso de Teste 3 - Cadastro de novo usuário](#caso-de-teste-3---cadastro-de-novo-usuário)
4. [Caso de Teste 4 - Campos obrigatórios no cadastro](#caso-de-teste-4---campos-obrigatórios-no-cadastro)
5. [Caso de Teste 5 - Fechar mensagem de erro](#caso-de-teste-5---fechar-mensagem-de-erro)

---

## **📝 Descrição dos Casos de Teste**

### **Caso de Teste 1 - Login com credenciais válidas**
- **Objetivo**: Validar o acesso ao sistema utilizando um e-mail e senha válidos.
- **Cenário**:
    1. Usuário acessa a tela de login.
    2. Usuário preenche os campos de **e-mail** e **senha** com dados válidos.
    3. Usuário clica no botão **"Acessar"**.
- **Resultado Esperado**: O sistema redireciona para a página inicial com sucesso.



---

### **Caso de Teste 2 - Login com credenciais inválidas**
- **Objetivo**: Verificar a exibição da mensagem de erro ao usar credenciais inválidas.
- **Cenário**:
    1. Usuário acessa a tela de login.
    2. Usuário insere um **e-mail inválido** ou uma **senha incorreta**.
    3. Usuário clica no botão **"Acessar"**.
- **Resultado Esperado**: Uma mensagem de erro é exibida em um modal: *"Usuário ou senha inválido. Tente novamente ou verifique suas informações!"*. O modal pode ser fechado clicando no botão **"Fechar"**.

---

### **Caso de Teste 3 - Cadastro de novo usuário**
- **Objetivo**: Garantir que um novo usuário possa ser cadastrado com sucesso.
- **Cenário**:
    1. Usuário acessa a tela de cadastro.
    2. Preenche os campos obrigatórios (**E-mail, Nome, Senha, Confirmação de senha**).
    3. Ativa ou desativa a opção **"Criar conta com saldo"**.
    4. Clica no botão **"Cadastrar"**.
- **Resultado Esperado**: O sistema exibe uma mensagem de sucesso confirmando o cadastro e retorna à tela de login.

---

### **Caso de Teste 4 - Campos obrigatórios no cadastro**
- **Objetivo**: Testar a validação dos campos obrigatórios no formulário de cadastro.
- **Cenário**:
    1. Usuário acessa a tela de cadastro.
    2. Deixa um ou mais campos obrigatórios vazios.
    3. Clica no botão **"Cadastrar"**.
- **Resultado Esperado**: Uma mensagem de erro é exibida: *"Todos os campos são obrigatórios!"*.

---

### **Caso de Teste 5 - Fechar mensagem de erro**
- **Objetivo**: Garantir que o modal de erro pode ser fechado corretamente.
- **Cenário**:
    1. Uma mensagem de erro é exibida.
    2. Usuário clica no botão **"Fechar"** dentro do modal.
- **Resultado Esperado**: O modal é fechado e o usuário retorna ao estado anterior da página.

---

## **🔍 Observações**
- Para automatizar os testes, utilize o framework **Cypress** e identifique os elementos através de **classes CSS** específicas.
- Garanta que todos os cenários considerem testes negativos (ex: campos vazios ou dados inválidos).

---

