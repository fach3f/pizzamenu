import Image from 'next/image'
import '@/app/globals.css'
import { Poppins } from 'next/font/google'
import Header from '../../../components/headers';
import piza from '../../../public/piza.png'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
});

const getProducts = async () => {
    const res = await prisma.product.findMany({
      select:{
        id: true,
        title: true,
        desc: true,
        harga: true,
        image: true,
      },  
    });
    return res;
  };

const Product = async () => {
    const products = await getProducts();
    return (
        <>
        <Header/>
        {products.map((product , index)=>(
            <div className="item-container" key={product.id}>
            <div className="item-top">
        
                <div className="top-right-cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
            <div className="main-item">
              <Image src={product.image} width="200" height="200" alt=''/>
            </div>
            <h2 className="item-heading">
                {product.title}
            </h2>
            <p className="item-description">
                {product.desc}
            </p>
            <p className="item-price"><sup>Rp.</sup>{product.harga}/-</p>
        </div>
        ))
        }

          </>
    )
}

export default Product