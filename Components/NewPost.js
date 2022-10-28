import { useState, useContext, useEffect } from 'react';
import { BlogContext } from '../Context/BlogContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db, storage } from '../firebase'
import { ref, uploadBytes, getDownloadURL, listAll  } from 'firebase/storage'

const NewPost = () => {
  const {currentUser} = useContext(BlogContext);
  const [image, setImage] = useState(null)
  const reference = ref(storage)
  const [imageUrl, setImageUrl] = useState('')
  const uploadImage= () =>{
   if(!image)return;
   const imageRef = ref(storage, `${image?.name.replace(/\s+/g, '')}`)
   alert('Uploading', imageRef)
   uploadBytes(imageRef, image).then((re) => {
      getDownloadURL(re.ref)
      .then((url) => {
      setNewPost((prev)=>({...prev, bannerImage : url}))
      alert(newPost.bannerImage + 'is a b******')
  })
   })
  }
  const [newPost, setNewPost] = useState({
   name: currentUser?.displayName,
   title: '',
   body: '',
   category: '',
   bannerImage:'',
   createdAt: serverTimestamp()
  })
  const clear = () => {
   setNewPost({
      name: currentUser?.displayName,
      title: '',
      body: '',
      category: '',
      bannerImage:''
   })
  }
  const submitPost = async (e) =>{
   e.preventDefault();
   uploadImage()
   await addDoc(collection(db, 'Articles'), newPost)
   clear()
  }
  return (
    <form onSubmit={submitPost} className='p-5 w-full'>
      <div>
         <label>Title</label>
         <input className="w-full" type="text" onChange={(e)=> setNewPost({...newPost, title : e.target.value})} />
      </div>
      <div>
         <label>brief</label>
         <input className="w-full" type="text" onChange={(e)=> setNewPost({...newPost, brief : e.target.value})} />
      </div>
      <div>
         <label>text</label>
         <textarea type="text" onChange={(e)=> setNewPost({...newPost, body : e.target.value})}></textarea>
      </div>
      
      <div>
         <label>category</label>
         <select onChange={(e)=> setNewPost({...newPost, category : e.target.value})}>
          <option value="recycle">Recycle</option>
          <option value="event">Event</option>
         </select>
      </div>
      <div>
         <input type="file" onChange={
            (e) => {setImage(e.target.files[0])
            uploadImage}}/>
      </div>
      <button type="submit">Post</button>
    </form>
  )
}

export default NewPost
