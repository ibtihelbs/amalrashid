import { useContext, useEffect, useState } from 'react'
import { BlogContext } from '../../Context/BlogContext'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Loader from '../../Components/Loader'
import PostCard from "../../Components/PostCard"
const SinglePost = ({}) => {
  const [post, setPost] = useState([])
  const [author, setAuthor] = useState([])
  const {posts, users} = useContext(BlogContext)
  const router = useRouter();
  useEffect(()=>{
    if(posts.length === 0) return;
    setPost(posts.find((post) => post.id === router.query.slug).data)
    setAuthor(users.find((user) => user.data.name === 'Ibtihel Ben Salah').data)
  },[post,posts,router.query.slug,users])
  console.log(posts) 
  return (
    <div className='py-[5%] px-[10%]'>   
    {post.length == 0 ? <Loader/>:
    <div>
      <h1 className='text-[2em] md:text-[5em]'>{post.title}</h1>
      <div className='w-full h-[500px] relative'>
       <Image src={post.bannerImage} alt={post.brief} className='object-cover' fill/>
      </div>
      <p>{post.brief}</p>
      <p>{post.body}</p>
      <div className='flex flex-row gap-1 p-2 shadow-md'>
        <span className='h-full w-full'>
          <Image src= {author?.imageUrl} alt ={author?.name} className='static rounded-full self-start' height={50} width={50} />
        </span>
        <div className='w-full'>
         <p className="text-[10px]">written by:{author?.name}</p>
         <span className="text-[10px]">{post.createdAt.toDate().toString()}</span>
        </div>
      </div>
      <div>
       {posts.map((post, index) =><PostCard key={post.id} index={post.id} post={post.data} users={users}/>)}
      </div>
    </div>}
    </div>
  )
}

export default SinglePost
