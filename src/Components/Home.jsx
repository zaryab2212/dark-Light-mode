import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ModeContext, useGlobleMode } from '../contextApi/DarkAndLightMode'

const Home = () => {
    const {isDark,setIsDark} =useContext(ModeContext)

  return (
    <div >
 <Link className={` ${isDark ? "aDark":"aLight"} `} to="/about">   About  </Link>
 <Link className={` ${isDark ? "aDark":"aLight"} `} to="/contact">  Contact   </Link>

 <h2>This is Home Page</h2>

 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas impedit odio omnis tenetur, ab suscipit atque, hic quidem eius nostrum maxime esse? Ex ducimus architecto necessitatibus cumque rem quisquam perspiciatis?</p>


    </div>
  )
}

export default Home