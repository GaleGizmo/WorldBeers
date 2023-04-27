import { getApiBeers } from "../components/apibeer";

document.addEventListener('DOMContentLoaded', async () => {
    const beers = getApiBeers()
    console.log(beers);
})
