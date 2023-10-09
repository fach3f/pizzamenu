import Link from "next/link"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
});

export default function Header(){
    return(
<header style={poppins.style} className="body">
    <nav className="navbar">
        <div className="left">
            <h1>Foody</h1>
        </div>
        <div className="right">
            <ul className="List">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/products">Menu</Link></li>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Contact Us</Link></li>
            </ul>
        </div>
    </nav>
</header>
)
}