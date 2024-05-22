const arrayItens = [
  "CaféDelicioso",
  "AmoCafé",
  "CaféEspecial",
  "InauguraçãoCafé",
  "CaféArtesanal",
  "CaféPremium",
  "CaféGourmet",
  "CaféPerfeito",
  "CaféComAmor",
  "CaféDeQualidade",
  "CaféSaboroso",
  "CaféExclusivo",
  "CaféDoDia",
  "CaféPassion",
  "CaféGourmet",
  "CaféFresquinho",
  "#CaféIncrível",
  "#CaféIntenso",
  "#CaféAromático",
  "#CaféViciante",
  "#CaféPuro",
  "#CaféNoPonto",
  "#CaféFantástico",
  "#CaféPremium",
  "#CaféArtístico",
  "#CaféNoCoração",
  "#CaféChique",
  "#CaféCelestial",
  "#CaféUnico",
  "#CaféDoMundo",
  "#CaféComClasse",
  "#CaféDoBem",
  "#CaféVibrante",
  "#CaféEnergizante",
  "#CaféMágico",
  "#CaféSofisticado",
  "#CaféInspiração",
  "#CaféParaíso",
  "#CaféRequintado",
  "#CaféNaMedida",
  "#CaféDivino",
  "#CaféSensorial",
  "#CaféNovidade"
];

console.log(arrayItens);



let i = 0

describe('Google', () => {
  it('pesquisar o termo "cypress"', () => {
    cy.visit('https://www.instagram.com/');
    cy.wait(3000);
    cy.get('.x1q0g3np.x1oa3qoh > :nth-child(1) > .x1i10hfl').click();
    cy.get(':nth-child(1) > .xnz67gz > ._aa48 > ._aa4b').type('43box.coffee')
    cy.get(':nth-child(2) > .xnz67gz > ._aa48 > ._aa4b').type('Mgs@12345')
    cy.get('.xqui205 > :nth-child(3)').click()
    cy.wait(6000);
    cy.get('.xpdipgo').click()
    cy.wait(4000);
    // cy.get(':nth-child(1) > :nth-child(3) > .x1i10hfl > ._aagu > ._aagw').click()// Image 3
    // cy.get(':nth-child(2) > :nth-child(1) > .x1i10hfl > ._aagu > ._aagw').click()// Image 4
    cy.get(':nth-child(2) > :nth-child(2) > .x1i10hfl > ._aagu > ._aagw').click()// Image 5
    // cy.get(':nth-child(2) > :nth-child(2) > .x1i10hfl > ._aagu > ._aagw').click()// Image 6
    // cy.get(':nth-child(3) > :nth-child(1) > .x1i10hfl > ._aagu > ._aagw').click()// Image 7
    // cy.wait(3000);

    while(i < arrayItens.length){
      cy.get('._akhn > .xvbhtw8').type(arrayItens[i])
      cy.get('._am-5').click()
      cy.wait(4500);
      i++
    }
  });
});