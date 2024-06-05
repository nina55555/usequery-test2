import React from 'react';
import axios from 'axios';
import { useQuery} from 'react-query';
import '../styles/card.css';


const Collection = () => {

    const {data, isError, isLoading} = useQuery ('model', () => {
    return axios.get ('http://localhost:3002/collection-test/');
    })

        return (
            <> 
            {data?.data.map((item) =>{
            return <div className= 'card' key={item.id} >
                {/*item.imageUrl*/} 
            <img src={item.imageUrl} alt= "photo model"/></div>
            })}
            </>
        );
    };
export default Collection;