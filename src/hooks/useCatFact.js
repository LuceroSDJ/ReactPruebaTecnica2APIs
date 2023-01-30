import {useState, useEffect} from 'react';
import {getRandomFact} from '../services/facts.js';

export function useCatFact() {
    const [fact, setFact] = useState();
    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact));
    }
    // ----- efecto para recuperar la cita al cargar la página
    useEffect(refreshFact, [])

    return {fact, refreshFact};
}

//notes: queremos evitar pasar el setState hacia afuera. 
//es buena practica mantenerlo interno en el componente/cusom hook handling the state at hand