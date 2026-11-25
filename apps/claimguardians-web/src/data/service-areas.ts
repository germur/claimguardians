export const states = [
  { code: 'FL', name: 'Florida', note: 'From the Atlantic coast to the Gulf.', cities: [
    ['Miami','miami'], ['Fort Lauderdale','fort-lauderdale'], ['West Palm Beach','west-palm-beach'], ['Boca Raton','boca-raton'], ['Orlando','orlando'], ['Kissimmee','kissimmee'], ['Daytona Beach','daytona-beach'], ['Lakeland','lakeland'], ['Tampa','tampa'], ['Fort Myers','fort-myers'], ['Cape Coral','cape-coral'], ['Naples','naples'], ['Jacksonville','jacksonville'],
  ] },
  { code: 'CA', name: 'California', note: 'Property claim help on the West Coast.', cities: [ ['Los Angeles','los-angeles'], ['San Francisco','san-francisco'], ['San Diego','san-diego'], ['Sacramento','sacramento'] ] },
  { code: 'NC', name: 'North Carolina', note: 'From the mountains to the coast.', cities: [ ['Charlotte','charlotte'], ['Raleigh','raleigh'], ['Wilmington','wilmington'], ['Asheville','asheville'], ['Fayetteville','fayetteville'], ['Jacksonville','jacksonville-nc'] ] },
];
const stateSlugs = { FL: 'florida', CA: 'california', NC: 'north-carolina' } as const;
export const stateAreaHref = (state: string) => `/service-areas/${stateSlugs[state as keyof typeof stateSlugs]}/`;
export const cityAreaHref = (state: string, city: string) => `/service-areas/${state === 'NC' ? 'north-carolina/' : ''}${city}/`;
