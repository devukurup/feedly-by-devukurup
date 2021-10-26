import React, {useEffect} from 'react';
import newsApi from './apis/news';

const Landing = () => {
    useEffect(() => {
        fetchNotes();
      }, []);
    return (
        <div>
            
        </div>
    )
}

export default Landing
