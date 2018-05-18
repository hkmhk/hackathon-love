export const getRandomInt = (min, max) =>  Math.floor(Math.random() * (max - min + 1)) + min;


export const genre = arr => arr.reduce((acc, el) => { acc[el.gender] = 1 + acc[el.gender] || 1; return acc }, {});

export const species = arr => arr.reduce((acc, el) => { acc[el.species] = 1 + acc[el.species] || 1; return acc }, {});

export const checkAffi = arr => {
    const myAffi = [];
    arr.forEach(el => {
        el.affiliations.forEach(el => myAffi.push(el));
    });
    return Array.from(new Set(myAffi)).slice(99);
}

export const filtreAffi = arr => arr.filter(el => el.affiliations.some((el) => el === "Alliance to Restore the Republic") ? el : "");


export const affiniteTag =
    ["Alliance to Restore the Republic", "Red Squadron", "Rogue Squadron", "Massassi Group", "Leia Organa's team", "Endor strike team", "Jedi Order", "Bright Tree tribe", "New Republic", "Resistance", "Skywalker family", "Confederacy of Independent Systems", "Royal House of Naboo", "Galactic Republic", "House of Organa", "Galactic Empire", "Pathfinders", "Resistance spy droid network", "501st Legion", "R2-D2's battle droid squadron", "D-Squad", "Sith", "Imperial High Command", "Elder Houses", "Imperial Senate", "Alliance High Command", "Populists", "Lars family", "Prefsbelt Fleet Camp", "Jedi High Council", "212th Attack Battalion", "Sullust Sector Spacefarers Academy", "Judicial Forces", "Republic Navy", "Strategic Advisory Cell", "Outland Regions Security Force", "Outland's anti-pirate taskforce", "Battle Station Command", "Imperial Officer Corps", "Imperial Navy", "Tarkin Initiative", "Jabba Desilijic Tiure's criminal empire", "Kingdom of Han", "New Republic Pilots Commission", "Han Solo's shipping company", "Trade Federation", "Hutt Clan", "Grand Hutt Council", "Shadow Collective", "Crymorah syndicate", "Phoenix Cell", "Phantom Squadron", "Tierfon Yellow Aces", "Grand Army of the Republic", "House Palpatine", "Damask Holdings", "Order of the Sith Lords", "Naboo Diplomatic Corps", "Galactic Senate", "Dark Empire", "Boba Fett's syndicate", "Bounty Hunters' Guild", "Chelli Aphra's crew", "Cloud City colony", "Gold Squadron", "New Republic military", "Uprising", "Calrissian Enterprises", "Imperial Military", "Cloud City", "Mon Cala monarchy", "Mon Calamari Guard", "Alliance Fleet", "New Republic Defense Fleet", "Resistance High Command", "Resistance Fleet Command", "Resistance navy", "Loyalist Committee", "Delegation of 2,000", "Mon Mothma's rebel cell", "Green Squadron", "Separatist Council", "House Valorum", "Apprentice Legislators", "Legislative Youth Program", "Gungan High Council", "Officer corps", "Naboo delegation", "Gungan Grand Army", "Royal Naboo Security Forces", "Bravo Flight", "Watto's shop", "Mos Espa", "Republic Special Task Force", "Nightbrothers", "Cad Bane's group", "Death Watch", "Fortuna family", "Jedi assault team", "Mace Windu's squad", "Galactic Marines", "104th Battalion", "Office of the Chancellor", "Imperial Ruling Council", "Coruscant provisional government", "Naboo Royal Handmaidens", "Stalgasin hive", "Karina the Great's empire", "Techno Union", "41st Elite Corps", "House of Dooku", "Lost Twenty", "Independent Movement for Self-Determination", "High Court of Alderaan", "Security Committee", "Delegation of 2000", "Finance Committee", "Appropriations Committee", "Intelligence Oversight Committee", "Military Oversight Committee", "Alderaanian Resistance", "Kota's Militia", "Tyranus", "Mabari", "Dex's Diner", "Baktoid Armor Workshop", "InterGalactic Banking Clan", "Muunilinst Banking Clan", "Separatist Droid Army", "Alliance Military", "First Order", "FN Corps", "Rapier Squadron", "Squadron", "Black Squadron", "Blue Squadron", "Reb Squadron", "Unidentified clan", "Scyre", "First Order military"];
export const genderTag = ["male", "female"];
export const ageTag = [[20,25],[25,30],[30,35],[35,40],[40,45],[45,50]];
