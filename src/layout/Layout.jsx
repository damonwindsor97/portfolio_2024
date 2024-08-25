import { Outlet } from "react-router-dom"

import Header from "./Header"

function layout() {
  return (
    <div>
      <div className="">
        <Header/>
      </div>

      <div className="m-auto md:w-full">
        <Outlet/>
      </div>
    </div>
  )
}

export default layout