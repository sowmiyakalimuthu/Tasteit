import React, { useEffect, useState } from 'react'
import "./style.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardsData from "./CardData";
import { addToCart } from '../redux/features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { detailProducts } from '../redux/features/dishSlice';
import Footers from './Footers';

const Home = () => {
    const [cartData, setCartData] = useState(CardsData);
    const dispatch = useDispatch();
    // const {dishes} = useSelector((state)=> state.allDish);

    // add to cart 
    const send = (e)=>{
        dispatch(addToCart(e))
        toast.success("Item added In Your Cart")
    }

    const handleDetailProduct = (element) => {
        console.log(element)
        dispatch(detailProducts(element))
    }

    return (
        <div className="bgColor">
            <section className='banner'>
                <img src='./img/11.jpg'/>
            </section>
            <section className='iteam_section mt-4 container' >
                <h2 className='px-4' style={{ fontWeight: 400 }}>Prepared with Love! Served Fresh!!</h2>
                <div className='row mt-2 d-flex justify-content-around align-items-center'>
                {(cartData.length !==0) ? (
                    <>
                    {
                        cartData.map((element, index) => {
                            return (
                                <>
                                {index<6 && (
                                    <>
                                    <Card style={{ width: "22rem", border: "none", backgroundColor:"#EEEEEE" }} className='hove mb-4'>
                                        <Link to="/details"><Card.Img style={{objectFit:"cover"}} variant='top' className='cd' src={element.imgdata} alt='no img'  onClick={() => handleDetailProduct(element)}/></Link>
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
                                                    className='mt-2 mb-2 btnHover'
                                                    onClick={()=>send(element)}
                                                >Add To Cart</Button>
                                                <img src={element.delimg} className='laimg' alt="" />

                                            </div>
                                        </div>
                                    </Card>
                                    </>
                                )}
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
                <div style={{textAlign:"center"}}>
                <Link to="/foodlist" ><Button style={{ width:"30%", background: "#E43A19", border: "none" }} variant='outline-light'>View all</Button></Link>
                </div>
               
            </section>

            {/* contact */}
            <section id="contactHome" className='mt-5'>
                <div>
                <h1 className='text-light'>Join our family!</h1>
                </div>
            <div id="socialIcons">
                <button><a href="https://facebook.com/">Facebook</a></button>
                <button><a href="https://www.instagram.com/">Insta</a></button>
                <button><a href="mailto:xyx@gmail.com">Mail</a></button>
                <button><a href="tel:1234567890">Call</a></button>
            </div>
            </section>
            <Footers/>
        </div>
    )
}

export default Home