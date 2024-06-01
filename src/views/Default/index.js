import React, {useEffect, useState} from "react";
import Posts from "../../components/Posts";
import axios from "axios";
import Loader from "../../components/Loader";
import { BASE_URL } from "../../utils/constant";
import Layout from "../Layout";

export default function Default() {
    const [posts, setPosts] = useState([]);
    const [enableLoader, setEnableLoader] = useState(false);
    
  useEffect(() => {
    const getAllPosts = async() =>{
      setEnableLoader(true);
      try {
        const response = await axios.get(BASE_URL);
        setPosts(response.data);
        setEnableLoader(false);
      } catch (error) {
        console.log("error occurred in getAllPost", error);
        setEnableLoader(false);
      }
    }
    getAllPosts();
  }, []);
    return (<>
    <Layout>
    {enableLoader ? <Loader/> : <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        {posts.map((post, index) => (<Posts index={index} post={post}/>))}
        </div>}
    </Layout>
    </>);
}