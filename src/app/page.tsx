import Image from 'next/image'
import '@/app/globals.css'
import { Poppins } from 'next/font/google'
import Header from '../../components/headers';
import piza from '../../public/piza.png'
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


export default function Home() {
  return (
  <>

<Header/>
<div className='menu'>
  <h1 style={poppins.style} className='hello'>it's not just food,<br />it's an Experience.</h1>
    <Image src={piza} className='piza' alt=''/>
</div>
<h1 className='best'>Best Seller</h1>
    <div className="item-container">
        <div className="item-top">
            <div className="top-right-cart">
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
        <div className="main-item">
          <Image src={piza} alt=''/>
        </div>
        <h2 className="item-heading">
            Pizza Papperoni
        </h2>
        <p className="item-description">
            Pizza yang enak tapi boong
        </p>
        <p className="item-price"><sup>Rp.</sup>50.000/-</p>

    </div>

    <div className="item-container">
        <div className="item-top">

            <div className="top-right-cart">
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
        <div className="main-item">
          <Image src={piza} alt=''/>
        </div>
        <h2 className="item-heading">
            Pizza Papperoni
        </h2>
        <p className="item-description">
            Pizza yang enak tapi boong
        </p>
        <p className="item-price"><sup>Rp.</sup>50.000/-</p>

    </div>
    <div className="item-container">
        <div className="item-top">

            <div className="top-right-cart">
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
        <div className="main-item">
          <Image src={piza} alt=''/>
        </div>
        <h2 className="item-heading">
            Pizza Papperoni
        </h2>
        <p className="item-description">
            Pizza yang enak tapi boong
        </p>
        <p className="item-price"><sup>Rp.</sup>50.000/-</p>
      
    </div>
    <div className="item-container">
        <div className="item-top">

            <div className="top-right-cart">
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
        <div className="main-item">
          <Image src={piza} alt=''/>
        </div>
        <h2 className="item-heading">
            Pizza Papperoni
        </h2>
        <p className="item-description">
            Pizza yang enak tapi boong
        </p>
        <p className="item-price"><sup>Rp.</sup>50.000/-</p>
       
    </div>
    
  </>

  );
};