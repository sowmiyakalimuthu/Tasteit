import React, { useState } from 'react'
import Cardsdata from './CardData';
import { Button, Card } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cartSlice';
import { detailProducts } from '../redux/features/dishSlice';
import { Link } from 'react-router-dom';


function Foodlist() {

    const [cartData, setCartData] = useState(Cardsdata);
    const dispatch = useDispatch();

    const send = (e)=>{
        dispatch(addToCart(e))
        toast.success("Item added In Your Cart")
    }

    const handleDetailProduct = (element) => {
        console.log(element)
        dispatch(detailProducts(element))
    }
  return (
    <div className="bgColor pb-5">
            <section className='iteam_section container bgColor'>
                <h2 className='p-4' style={{ fontWeight: 400 }}>Prepared with Love! Served Fresh!!</h2>
                <div className='row mt-2 d-flex justify-content-around align-items-center'>
                {(cartData.length !==0) ? (
                    <>
                    {
                        cartData.map((element, index) => {
                            return (
                                <>
                                    <Card style={{ width: "22rem", border: "none" }} className='hove mb-4 bgColor'>
                                        <Link to="/details"><Card.Img style={{objectFit:"cover"}} variant='top' className='cd' src={element.imgdata} alt='no img' onClick={() => handleDetailProduct(element)}/></Link>
                                        <div className="card_body">
                                            <div className="upper_data d-flex justify-content-between align-items-center">
                                                <h4 className='mt-2'>{element.dish}</h4>
                                                <span>{element.rating}&nbsp;★</span>
                                            </div>

                                            <div className="lower_data d-flex justify-content-between ">
                                                <h5>{element.category}</h5>
                                                <span>₹ {element.price}</span>
                                            </div>
                                            <div className="extra"></div>

                                            <div className="last_data d-flex justify-content-between align-items-center">
                                                <img src={element.arrimg} className='limg' alt="" />
                                                <Button style={{ width: "150px", background: "#E43A19", border: "none" }} variant='outline-light'
                                                    className='mt-2 mb-2'
                                                    onClick={()=>send(element)}
                                                >Add To Cart</Button>
                                                <img src={element.delimg} className='laimg' alt="" />

                                            </div>
                                        </div>
                                    </Card>
                                    </>
                            )
                        })
                        
                    }
                    </>
                ):(
                    <>
                    <p>No results found</p>
                    </>
                )}
                </div>               
            </section>
        </div>
    )
  
}

export default Foodlist