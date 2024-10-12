import { NavLink } from "react-router-dom"



type Props = {}

function Navbar({}: Props) {
  return (
    
    <nav className="flex bg-gold p-5 gap-5 ">
        <NavLink to="/home" > Home </NavLink>
        <NavLink to="/contact" > Contact </NavLink>
        <NavLink to="/about" > About </NavLink>
    </nav>
    

  )
}

export default Navbar