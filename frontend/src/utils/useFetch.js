import React from 'react'
import axios from 'axios';

const useFetch = () => {
const token = localStorage.getItem('userToken') || "";

    const  query = (data, thenFunction, type ) =>   {
        axios({
            method: type,
            headers:{"Authorization" : token},
            url: 'http://localhost:3001/',
            data: {
                query: data
            }
          }).then(thenFunction

          ).catch(err => {
              throw new err
          });
    };


  return { query}
}

export default useFetch