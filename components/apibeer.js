export async function getApiBeers(){
    const resultFetch = await('https://api.punkapi.com/v2/beers');
    const resultJson = await resultFetch.json();
    console.log(resultJson);
}