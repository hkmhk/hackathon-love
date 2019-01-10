const characters = this.state.characters.map((el, key) => <Profile character={el} key={key} />);
const numbers = this.state.characters.reduce((acc, el) => {
  acc[el.homeworld] = 1 + acc[el.homeworld] || 1;
  return acc;
}, {});

const genre = this.state.characters.reduce((acc, el) => {
  acc[el.gender] = 1 + acc[el.gender] || 1;
  return acc;
}, {});

const species = this.state.characters.reduce((acc, el) => {
  acc[el.species] = 1 + acc[el.species] || 1;
  return acc;
}, {});

const affi = this.state.characters.map((el, i) => el.affiliations);

const filtre = this.state.characters.filter(el => el.affiliations.some((el) => el === 'Alliance to Restore the Republic') ? el : '');
