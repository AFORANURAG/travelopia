import Navbar from "./Navbar"
import Link from "next/link"
export default function Layout({children}) {
  return (
   <>
   <Navbar/>
   {children}
   </>
  )
}
