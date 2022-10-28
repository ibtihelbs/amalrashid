import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    
      <ul className="Navbar flex justify-around">
     <Image height = "100" width= "100" src="/recycle.png" alt="recycle"/>
     <Image height = "100" width= "100" src="/growth.png" alt="growth" />
      <li>
        <Image height = "100" width= "100" src="/energy.png"    alt="cooperation"/>
        <h6>مدرسة ايكولوجية </h6>
      </li>
     <Image height = "100" width= "100" src="/repair.png"    alt="cooperation"/>
     <Image height = "100" width= "100" src="/earth.png"    alt="cooperation"/>
     ترميم       
     إعادة التدوير

    </ul>
    
  )
}

export default Navbar
