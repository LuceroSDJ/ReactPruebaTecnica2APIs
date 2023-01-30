const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

// export const getRandxomFact = () => {
    // ----- fetch para recuperar la cita al cargar la página
//    return fetch(CAT_ENDPOINT_RANDOM_FACT)
//    .then(res => res.json())
//    .then(data => {
       //del obj data recuperamos el "fact" - destructuring the fact prop from the obj data
    //    const {fact} = data;
    //    return fact;
//    })
// }

export const getRandomFact = async () => {
    const res =  await fetch(CAT_ENDPOINT_RANDOM_FACT);
    const data = await res.json();
    const {fact} = data;
    return fact;
}

// res.json() returns a promise which resolves with the result of parsing the body text as JSON.
//Note that despite the method being named json(), 
//the result is not JSON but is instead the result of taking JSON as input and parsing it
// to produce a JavaScript object (MDN web docs).