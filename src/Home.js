import React from 'react'
import  "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
            <img src="https://lavozdgo.com/wp-content/uploads/2020/08/amazon-prime-estrenos-septiembre-2020.jpg"
            className="home_image" alt="Amazon prime Ad"/>
            <div className="home_row">
                <Product id="1" title="The lean startup" price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg ' rating={4}/>
               <Product id="2" title="lenovo yoga" price={29.99} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3nmY5YGnx2aI10bsHJ40GfUN32khs3voCfgIGRkC1s6ZXVLTe7ZjNhPD_HKvUPxDQLpv1opQp&usqp=CAc' rating={4}/>
            </div>
            <div className="home_row">
           <Product id="3" title="Mi Watch" price={29.99} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5KCD8C0JlFTgYjBhQp1dK1FpNrtu24TtdGHe9-Cdw7-n1XT9sAUtu6AdRHbfdzJuTVyUuzNV&usqp=CAc' rating={4}/>
            <Product id="4" title="Mi TV 4X 125.7 cm (50 Inches) 4K Ultra HD Android LED TV (Black)" price={29.99} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQprmGB2I8WDqH6dRqKwVoWLuZ5RGmGKC1_vZD35tCT6qidwAbIlfAcm-YzM2e-NHxx1ZXbh_mI&usqp=CAc' rating={4}/>
            <Product id="5" title="New Apple iPhone 12 Pro Max (128GB) - Graphite" price={29.99} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5TTYyOyFLEujNXY0WXj8djOwUVMW38aLJDhIYyvUK5GPI1x3-K4onft8y9VTzuio3XNSOBO_&usqp=CAc ' rating={4}/>
            </div>
            <div className="home_row">
            <Product id="6" title="Redmi 9 (Sky Blue, 4GB RAM, 64GB Storage)" price={29.99} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSHSfF2GSh9auz9ZnS-AeefLaeB5nM5Ra6yIwGUqUdx3a5AU9OhTvpDZrN2k2-JE9RHmwusU&usqp=CAc ' rating={4}/>
            </div>

            </div>
        </div>
    )
}

export default Home
