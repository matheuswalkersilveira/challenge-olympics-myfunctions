let olympicsMedalTable = [
    { id: 1, country: "BRASIL", gold: 7, silver: 6, bronze: 6, continent: "AMERICA DO SUL" },
    { id: 2, country: "USA", gold: 46, silver: 37, bronze: 17, continent: "AMERICA DO NORTE" },
    { id: 3, country: "CHINA", gold: 26, silver: 18, bronze: 26, continent: "ASIA" },
    { id: 4, country: "RUSSIA", gold: 19, silver: 18, bronze: 19, continent: "EUROPA" },
    { id: 5, country: "REINO UNIDO", gold: 27, silver: 23, bronze: 17, continent: "EUROPA" },
    { id: 6, country: "ALEMANHA", gold: 17, silver: 10, bronze: 15, continent: "EUROPA" },
    { id: 7, country: "JAP�O", gold: 12, silver: 8, bronze: 21, continent: "ASIA" },
    { id: 8, country: "ARGENTINA", gold: 3, silver: 1, bronze: 0, continent: "AMERICA DO SUL" },
    { id: 9, country: "ITALIA", gold: 8, silver: 12, bronze: 8, continent: "EUROPA" },
    { id: 10, country: "QU�NIA", gold: 6, silver: 6, bronze: 1, continent: "AFRICA" },
];

Array.prototype.customFind = function (predicate) {

	let result = null;

	for (let i = 0; i < this.length; i++) {
		if (predicate(this[i])) {
		  result = this[i];
		  break;
		}
	}

	return result;
}

Array.prototype.customSome = function (predicate) {
	let result = false;

	for (let i = 0; i < this.length; i++) {
		if (predicate(this[i])) {
		  result = true;
		  break;
		}
	}

	return result;
}

Array.prototype.customFilter = function (predicate) {
    
	let result = [];

	for (let i = 0; i < this.length; i++) {
		if (predicate(this[i])) {
		  result.push(this[i]);
		}
	}

	return result;
}

Array.prototype.customMap = function (callback) {
	let result = [];

	for (let i = 0; i < this.length; i++) {
		result.push(callback(this[i]));
	}

	return result;
}

Array.prototype.customReduce = function (callback, initialValue) {
      let value = initialValue == undefined ? null : initialValue;

      for(let i = 0; i < this.length; i++) {
        let currentValue = this[i]
        value = callback(value, currentValue);
      }

      return value;
}

// C�digo modelo utilizando filter, map e reduce

const resultFilterMapReduce = olympicsMedalTable.filter(i => i.continent === "ASIA") // JAP�O e CHINA 
    .map(i => i.gold) // 26 e 12
    .reduce((total, quantity) => total + quantity); // 38

console.log(`Medalhas de Ouro no continente Asi�tico: ${resultFilterMapReduce}`);


// Implemente as fun��es customizadas - customFilter, customMap e customReduce e verique se o retorno � igual ao do c�digo modelo

const resultByCustomFilterMapReduce = olympicsMedalTable.customFilter(i => i.continent === "ASIA")
    .customMap(i => i.gold)
    .customReduce((total, quantity) => total + quantity);

console.log(`Resultado custom - Medalhas de Ouro no continente Asi�tico: ${resultByCustomFilterMapReduce}`);

/* DESAFIOS - CONCLUA AS FUN��ES customSome, customFind E UTILIZANDO TODAS AS FUN��ES 'CUSTOM' CONCLUA OS DESAFIOS ABAIXO: */

// 1 - Crie um algoritmo que encontre o �nico pais do continente Africano
 const paisAfricano =  olympicsMedalTable.customFilter(i => i.continent === "AFRICA")
                                         .customMap(i => i.country)      ;
 console.log(paisAfricano);

// 2 - Crie um algoritmo que retorne o total de medalhas por pa�s
 const medalhasPorPais =  olympicsMedalTable.customMap(i => i.country + " medalhas: " + (i.gold + i.silver + i.bronze));
 console.log(medalhasPorPais);

// 3 - Crie um algoritmo para encontrar os pa�ses que conquistaram mais que 10 medalhas de ouro
 const paisesCom10MedalhasOuroNoMinimo =  olympicsMedalTable.customFilter(i => i.gold >= 10)
                                                            .customMap(i => i.country);
 console.log(paisesCom10MedalhasOuroNoMinimo);

// 4 - Crie um algoritmo para encontrar os pa�ses que conquistaram no min�mo 30 medalhas (Ouro, Prata e Bronze)
const paisesCom30MedalhasNoMinimo =  olympicsMedalTable.customFilter(i => (i.gold + i.silver + i.bronze) >=30)
                                                       .customMap(i => i.country);
console.log(paisesCom30MedalhasNoMinimo);

// 5 - Crie um algoritmo para verificar se o continente Am�rica do Sul conquistou pelo menos 20 medalhas de ouro
const paisesComPeloMenos20MedalhasDeOUro =  olympicsMedalTable.customFilter(i => i.continent === "AMERICA DO SUL")
                                                              .customMap(i => i.gold)
                                                              .customReduce((total, quantity) => total + quantity) >=20;
console.log(paisesComPeloMenos20MedalhasDeOUro);