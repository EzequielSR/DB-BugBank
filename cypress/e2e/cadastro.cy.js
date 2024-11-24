describe('Validando cadastro', () => {

    it('Ao realizar cadastro deve exibir número da conta', () => {

        cy.cadastroComSaldo().then(resp => {
            cy.get('.styles__ContainerContent-sc-8zteav-1').contains('foi criada com sucesso')

            cy.numeroConta(resp)
            cy.get('@numeroConta').then((numeroConta) => {
                cy.get('@digitoConta').then((digitoConta) => {
                    cy.log(`Conta: ${numeroConta}-${digitoConta}`)
                })
            })
        });
    })

    it('Não deve ser possível cadastrar com senha e confirmação de senha diferentes.', () => {

        cy.cadastroSenhasDiferentes().then(() => {

            cy.get('.styles__ContainerContent-sc-8zteav-1').contains('As senhas não são iguais.')

            cy.get('#btnCloseModal').click({force: true})

            cy.contains('button', 'Acessar')
        });
    })

})

describe('Validando mensagens de obrigatóriedade de campos', () => {


    it('Deve mostrar mensagem de obrigatóriedade de email', () => {
        cy.aparecerMensagemObrigatorio().then(() => {
            cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > :nth-child(2)').contains('É campo obrigatório')
        })
    })

    it('Deve mostrar mensagem de obrigatóriedade de senha', () => {
        cy.aparecerMensagemObrigatorio().then(() => {
            cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0').contains('É campo obrigatório')
        })
    })

    it('Deve exibir mensagem de obrigatóriedade de confirmação de senha', () => {
        cy.aparecerMensagemObrigatorio().then(() => {
            cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0').contains('É campo obrigatório')
        })
    })


})

describe('Validando tentativas de cadastro sem preencher campos', () => {

    it('Não deve cadastrar sem preencher email', () => {

        cy.cadastroSemEmail().then(() => {
            cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > :nth-child(2)').contains('É campo obrigatório')
        })
    })

    it('Não deve cadastrar sem preencher nome', () => {
        cy.cadastroSemNome().then(() => {
            cy.get('.styles__ContainerContent-sc-8zteav-1').contains('Nome não pode ser vazio.')
        })
    })

    it('Não deve cadastrar sem preencher senha', () => {
        cy.cadastroSemSenha().then(() => {
            cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0').contains('É campo obrigatório')
        })
    })

    it('Não deve cadastrar sem preencher confirmação de senha', () => {
        cy.cadastroSemConfirmarSenha().then(() => {
            cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0').contains('É campo obrigatório')
        })
    })
})

describe('Validando criação de conta com saldo e sem saldo.', () => {

    it('Criação de conta com saldo', () => {

        cy.cadastroComSaldo().then(resp => {
            cy.loginEmailUm(resp).then(() => {
                cy.get('#textBalance').contains('R$ 1.000,00')
            })
        })
    })

    it('Criação de conta sem saldo', () => {

        cy.cadastroSemSaldo().then(resp => {
            cy.loginEmailDois(resp).then(() => {
                cy.get('#textBalance').contains('R$ 0,00')
            })
        })
    })

})