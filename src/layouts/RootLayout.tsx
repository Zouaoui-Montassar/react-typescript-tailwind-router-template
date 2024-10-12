import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"



type Props = {}

const RootLayout = (props: Props) => {
  return (
    <>
    <Navbar  />
    <Outlet />

    </>
  )
}

export default RootLayout