import { createContext, useState, useEffect } from 'react';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { auth, Provider, db } from '../firebase'
import { signInWithPopup } from 'firebase/auth';
const BlogContext = createContext();
const BlogProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(()=>{
        const getUsers = async () => {
          const querySnapShot = await getDocs(collection(db, 'Users'))
          setUsers(querySnapShot.docs.map((doc) =>{
            return {
                id: doc.id,
                data: doc.data()
            }
          }))
        }
        getUsers();
    },[])
    useEffect(()=>{
        const getPosts = async () => {
          const querySnapShot = await getDocs(collection(db, 'Articles'))
          setPosts(querySnapShot.docs.map((doc) =>{
            return {
                id: doc.id,
                data: doc.data()
            }
          }))
        }
        getPosts();
    },[])
    /**send user data */
    const sendUserToFirebase = async user => {
      await setDoc(doc(db, 'Users', user.displayName), {
        email: user.email,
        name: user.displayName,
        imageUrl: user.photoURL
      })
    }

    const hundleAuth = async () =>{
     const data = await signInWithPopup(auth, Provider);
     setCurrentUser(data.user)
     //console.log(currentUser)
     console.log(currentUser)
     if(currentUser){
      sendUserToFirebase(currentUser)
     }
    

    // return await signInWithPopup(auth, Provider)
    }

    return (
        <BlogContext.Provider
        value={{users, posts, hundleAuth, currentUser }}>
        {children}
        </BlogContext.Provider>
    )
}

export { BlogProvider, BlogContext }

