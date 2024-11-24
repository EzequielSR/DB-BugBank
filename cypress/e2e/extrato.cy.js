describe('Validar extrato', () => {
    it('Teste de transferência e valor do extrato.', () => {
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

                            cy.get('#btn-EXTRATO').click()
                            cy.get('.bank-statement__ContainerReceipt-sc-7n8vh8-7').contains('R$ 520,00')
                        })
                    })
                })
            })
        })
    })
})