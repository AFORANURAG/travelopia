import {GiHamburgerMenu} from "react-icons/gi"
console.log(GiHamburgerMenu)
import Link from "next/link"
export default function Navbar() {
  return (
    <div id="upperbody" >
    <nav>
    <input type="checkbox" id="check"/>
    <label className="checkbtn" htmlFor="check">
    <GiHamburgerMenu style={{color:"white"}}/>
    </label>

        <label className="logo" htmlFor="">
    <Link className="animate__animated animate__bounce" href={"/"}>Travelopia</Link>
        </label>
         <ul className="animate__animated animate__bounce">
                <li><Link  href={"/travel"}>Travel</Link></li>
               
                <li >
                <Link href={"/booking"}> Active Booking</Link>
               
                </li>
            
                </ul>
            </nav>
    
    </div>
        
  )
}
