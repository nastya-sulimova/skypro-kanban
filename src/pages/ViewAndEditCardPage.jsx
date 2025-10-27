import PopBrowse from "../components/popups/PopBrowse/PopBrowse"
import { Overlay } from "./LogOutPage"
import { Outlet } from "react-router-dom"

const ViewAndEditCardPage = () => {
  return (
    <Overlay>
      <PopBrowse/>
      <Outlet />
    </Overlay>
  )
}

export default ViewAndEditCardPage