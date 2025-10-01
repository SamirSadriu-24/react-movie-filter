import { useState, useEffect } from 'react';
import movie from './movie';

const MyMain = () => {

    const [genereSelezionato, setgenereSelezionato] = useState("");
    const [filmFiltrati, setfilmFiltrati] = useState([]);

    useEffect(() => {
        if (genereSelezionato){
            setfilmFiltrati(movie.filter(film => film.genre === genereSelezionato));
        } else {
            setfilmFiltrati(movie);
        }
            
    }, [genereSelezionato])

    return (
        <>
            <div className="main">
                <div className="form_box">
                    <form>
                        <label htmlFor="generi"><h3>SCEGLI UN GENERE:</h3></label>
                        <select 
                        name="generi"
                        id="genere"
                        value={genereSelezionato}
                        onChange={e => setgenereSelezionato(e.target.value)}
                        >
                            <option value="">Tutti i generi</option>
                            <option value="Fantascienza">Fantascienza</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Romantico">Romantico</option>
                            <option value="Azione">Azione</option>
                        </select>

                    </form>
                </div>
            </div>

            <div className="movie-box">
                {filmFiltrati.map((m) => 
                <div className='film'>
                    {m.title}
                </div>

                )}

            </div>
        </>
    )
}

export default MyMain