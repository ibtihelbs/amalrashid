import Link from 'next/link'
import Image from 'next/image'
const Header = () => {

  return (
    <section>
      <div className="flex justify-between p-4 md:h-1/6">
    <Image src='/logo.png' id="logo" className='self-center' alt="logo" height = "20" width= "20"/>
    <ul className="flex justify-around gap-2 flex flex-col">
      <li  className='self-center'>
        <Link href="/Blog">
            <h3>Home</h3>
        </Link>
      </li>
      <li  className='self-center'>
        <Link href="/Blog">
            <h3>Blog</h3>
        </Link>
      </li>
      <li  className='self-center'>
          <a href="#Contact">
            <h3>Contact</h3>
          </a>  
      </li>
      
    </ul>
    </div>
    <h1 className="md:text-[5em] text-[2rem] text-right text-blue">محيط أفضل </h1>
    <h1 className="md:text-[5em] text-[2rem] text-right	text-blue"> لحياة أفضل </h1>
    <p className="text-green text-right w-full md:w-1/2 right-50px md:translate-x-[100%]  text-[8px]">وداعًا للأيدي الجافة والمنظفات القاسية!
   كانت هناك حالتان لم يحظ فيهما عميلان مطلقًا بفرصة غسل الأطباق طوال
  حياتهما بسبب المكونات القاسية 
   والجافة في سائل غسيل الأطباق الذي يتم شراؤه من المتجر 
، ولكنهما أخيرًا يمكنهما غسل الأطباق بعد استخدام الصابون متعدد </p>
    </section>
  )
  //()=> router.push('/')
}

export default Header
/**صفحة الرئيسية 

مدونة 

تواصل 

تطوع */