export async function getApiBeers(){
    const resultFetch = await fetch('https://api.punkapi.com/v2/beers');
    const resultJson = await resultFetch.json();
    return resultJson;
}