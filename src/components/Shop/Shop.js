import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
  const first10 =  fakeData.slice(0,10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);
  const handleAddProducts = (product) => {
      console.log('hy ',product);
      const newCart = [...cart,product];
      setCart(newCart);
  }
 
     return (
           <div className='shop-contraner'>
                <div className='products-contraner'>
                    {
                        products.map(pd => <Product
                            handleAddProducts = {handleAddProducts}
                            product={pd}
                            ></Product>)
                    }
                
            </div>
            <div className='cart-contramer'>
                
            <Cart cart={cart}></Cart>

            </div>
           </div>
            
    );
};

export default Shop;