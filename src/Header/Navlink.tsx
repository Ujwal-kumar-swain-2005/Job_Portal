import React, { use } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navlink = () => {
    const links = [
    {name: "Find Job", link: "/"},
    {name: "Find Talent", link: "/jobs"},
    {name: "Upload Job", link: "/upload"},
    {name: "About Us", link: "/about"},
    ]
    const location = useLocation();

  return (
  
   <div className="flex gap-5 text-bright-sun-500 text-lg">
  {links.map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center h-full"
    >
      <div className={location.pathname === item.link ? "border-t-[3px] border-bright-sun-500 w-full" : ""}></div>

      <Link
        to={item.link}
        className="hover:text-bright-sun-300 cursor-pointer"
      >
        {item.name}
      </Link>
    </div>
  ))}
</div>


  )
}

export default Navlink
