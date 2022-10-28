import Link from 'next/link'
import { BlogContext } from '../Context/BlogContext'
import NewPost from '../Components/NewPost'
import { useContext } from 'react'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import PostCard from "../Components/PostCard"
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase"


Modal.setAppElement('#__next')

const costumStyles = {
  content: {
    top: '50%',
    left: '50%',
    bottom: 'auto',
    right: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding:0,
    border:'none',
    width: '50%',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.69)',
  }
}

const Admin = () => {
  const router = useRouter()
  const {currentUser ,hundleAuth,posts, users} = useContext(BlogContext)
  
  return (
   <div>
       <ul>
      <li>
      <Link href="/" className="goBack">
          <svg xmlns="http://www.w3.org/2000/svg" className="arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>العودة للصفحة الرئيسية
      </Link>
      </li>
      {currentUser ? <>
              <li className="underline">logged in</li>
              <Link href="Admin/?addNew=1">
               <li  className='self-center'>write</li>
              </Link> 
             </>: <div className='bg-yellow h-[600px] w-screen  flex content-center flex justify-center'>
                    <div className='bg-orange h-1/5 w-1/5 text-white flex content-center flex justify-center'>
                     <button className='bg-orange h-1/3 w-1/5 text-white' onClick={hundleAuth}>sign in </button>
                    </div>
                  </div>
      }
      <Modal
       isOpen={Boolean(router.query.addNew)}
       onRequestClose={()=> router.push('/Admin')}
       style={costumStyles}
      >
        <NewPost/>
      </Modal>
    </ul>
    {currentUser ? 
        <main>
        {
          posts.map((post, index) =>
          (<div key={post.id}>
            <button onClick={async ()=> {await deleteDoc(doc(db, "Articles", post.id)) }} className='text-white bg-orange py-2 px-4'>delete</button>
            <PostCard index={post.id} post={post.data} users={users} />
          </div>)
          )
        }
      </main>
     : <></> }
     </div> 
  )
}

export default Admin
