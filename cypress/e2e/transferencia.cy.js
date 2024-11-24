describe('Validar transferência', () => {

    it('Sucesso na transferência.', () => {
        cy.cadastroSemSaldo().then(resp => {
            cy.numeroConta(resp)
            cy.cadastroComSaldo().then(logar => {
                cy.loginEmailUm(logar).then(() => {

                    cy.get('@numeroConta').then(conta => {
                        cy.get('@digitoConta').then(digito => {

                            cy.get('#btn-TRANSFERÊNCIA').click()
                            cy.get(':nth-child(1) > .input__default').type(conta)
                            cy.get('.account__data > :nth-child(2) > .input__default').type(digito)

                            cy.transferencia()
                            cy.get('.styles__ContainerContent-sc-8zteav-1').contains('Transferencia realizada com sucesso')
                            cy.get('#btnCloseModal').click()
                            cy.get('#btnBack').click()
                            cy.get('#textBalance > span').contains('R$ 520,00')
                        })
                    })
                })
            })
        })
    })

    it('Erro ao realizar transferência para conta inválida', () => {

        cy.cadastroComSaldo().then(logar => {
            cy.loginEmailUm(logar).then(() => {

                cy.get('#btn-TRANSFERÊNCIA').click()
                cy.get(':nth-child(1) > .input__default').type('000')
                cy.get('.account__data > :nth-child(2) > .input__default').type('0')

                cy.transferencia()

                cy.get('.styles__ContainerContent-sc-8zteav-1').contains('Conta inválida ou inexistente')

            })
        })
    })

    it('Erro ao fazer transferencia de um saldo maior que o atual', () => {
        cy.cadastroSemSaldo().then(logar => {

            cy.cadastroComSaldo().then(resp => {
                cy.numeroConta(resp)
                cy.loginEmailDois(logar).then(() => {

                    cy.get('@numeroConta').then(conta => {
                        cy.get('@digitoConta').then(digito => {

                            cy.get('#btn-TRANSFERÊNCIA').click()
                            cy.get(':nth-child(1) > .input__default').type(conta)
                            cy.get('.account__data > :nth-child(2) > .input__default').type(digito)

                            cy.transferencia()

                            cy.get('.styles__ContainerContent-sc-8zteav-1').contains('Você não tem saldo suficiente para essa transação')

                        })
                    })
                })
            })
        })
    })
})