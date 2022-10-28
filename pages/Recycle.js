import Link from 'next/link'
const Recycle = () => {
  return (
    <div>
      <Link href="/">
          <a className="goBack"><svg xmlns="http://www.w3.org/2000/svg" className="arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>العودة للصفحة الرئيسية</a>
      </Link>
      <Link href="Articles/Soap">
          <a className="goBack"> Saop </a>
    </Link>
    </div>
  )
}

export default Recycle
