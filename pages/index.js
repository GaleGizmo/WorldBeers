import { getApiBeers } from "../components/apibeer";

document.addEventListener('DOMContentLoaded', async () => {
    const beers = await getApiBeers()
    console.log(beers);
})