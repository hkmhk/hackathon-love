const characters = this.state.characters.map((el, key) => <Profile character={el} key={key} />);
const numbers = this.state.characters.reduce((acc, el) => { acc[el.homeworld] = 1 + acc[el.homeworld] || 1; return acc }, {});
console.log('====================================');
console.log(numbers);
console.log('====================================');
const genre = this.state.characters.reduce((acc, el) => { acc[el.gender] = 1 + acc[el.gender] || 1; return acc }, {});
console.log('====================================');
console.log(genre);
console.log('====================================');
const species = this.state.characters.reduce((acc, el) => { acc[el.species] = 1 + acc[el.species] || 1; return acc }, {});
console.log('====================================');
console.log(species);
console.log('====================================');
const affi = this.state.characters.map((el, i) => el.affiliations);
console.log('====================================');
console.log(new Set(...affi));
console.log('====================================');
const filtre = this.state.characters.filter(el => el.affiliations.some((el) => el === "Alliance to Restore the Republic") ? el : "");
console.log('====================================');
console.log(filtre);
console.log('====================================');