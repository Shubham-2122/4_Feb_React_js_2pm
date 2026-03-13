import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useFetch(url) {
 
    const [data,setdata] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        const res = await axios.get(url)
        setdata(res.data)
    }

    return {data}

}

export default useFetch
