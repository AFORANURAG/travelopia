
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import Link from 'next/link'
export default function Home() {
  return (
    <>
  <div id='homepage' style={{textAlign:"center"}}>
  <h1>Welcome To Travelopia</h1>
  <p>Click on <Link href={"travel"}><b>"Travel"</b></Link>  to book your travel destination</p>
  <p>Click on <Link href={"booking"}><b>"Active Booking"</b></Link>  to see your Active Booking</p>
  </div>  
  </>
  )
}
