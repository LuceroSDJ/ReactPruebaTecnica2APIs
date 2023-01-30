// custom hook 
import {useState, useEffect} from 'react';

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export function useCatImage({fact}) {
    console.log('fact param from custom hook', fact);
    const [imageURL, setImageURL] = useState();
    //es bueno q en react, los efectos tengan solo una responsabilidad
    // ---- efecto para recuperar la imagen cada vez q tenemos una cita nueva
    useEffect(() => {
        if(!fact) return;
        // Ahora vamos a recuperar la primera palabra del hecho 
        // take string and split() it based on the " " blank space - split() return an array
        // const firstWord = fact.split(' ').slice(0,3).join(' ');
        //o de mejor manera y facilment usa el 2nd parametro de split para decirle con cuantas palabras quedarse
        const threeFirstWords = fact.split(' ', 3).join(' ');
        console.log(threeFirstWords);

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const {url} = response;
                setImageURL(url);
            })
    },[fact])

    return {imageURL: `${CAT_PREFIX_IMAGE_URL}${imageURL}`};
}

