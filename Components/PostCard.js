import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase' 
const PostCard = ({post, index, users}) => {
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    setAuthor(users.find(u => post.author === users.name))
  },[post.author,users]) 
  //
  return ( 
    <div className="relative max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
       <div className="relative w-full h-full">
          <Image  className="rounded-t-lg object-cover" fill src={post.bannerImage} alt={post.brief}  />
       </div>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate ...">{post.body}</p>
        <Link href={`/SinglePost/${index}`} className="inline-block mt-2 text-blue-500 underline hover:text-blue-400 flex justify-between align-center">
            <p className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-blue bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Read more .....</p>
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="blue" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
       </Link>
       <div className="flex items-center mt-6">
        <div className="mx-4">
            <h1 className="text-sm text-gray-700 dark:text-gray-200">{author?.name}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">time:{post.createdAt.toDate().toString()}</p>
        </div>
    </div>
    </div>
</div>
  )
}
/**<!-- component -->
 */


export default PostCard
