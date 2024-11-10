import Link from "next/link"
import Image from "next/image"

function Navbar(){
    return(
        <header className="header">
        <div className="logo">
            <Image width={100} height={100} src="/s-logo.png" alt="salif"></Image>
        </div>

        <nav className="navbar">
            
                <li><Link href="#">Home</Link></li>
               <li> <Link href="#">About</Link></li>
                <li><Link href="#">Contact</Link></li>
        </nav>
    </header>

    )
}

export default Navbar