import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CardData() {

    const [card, setcard] = useState([])

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products")
            console.log(res.data)
            setcard(res.data)
        } catch (error) {
            console.log("Api data not Found..", error)
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        card && card?.map((data, index) => {
                            // console.log(data)
                            const {image,title,price,category} = data
                            return (
                                <div className="col-md-4" key={index}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                            <h5 className="card-title">{price} $</h5>
                                            <h5 className='card-data'>{category}</h5>
                                            <p className="card-text">{data.description.slice(0,100)}...</p>
                                            <button  className="btn btn-primary">buy now</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        
                    }
                </div>
            </div>
        </div>
    )
}

export default CardData
