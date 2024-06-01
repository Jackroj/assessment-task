import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { ErrorToaster, successToaster } from "../../config/toaster";
import { BASE_URL } from "../../utils/constant";
import Layout from "../../views/Layout";

export default function Modal() {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [enableLoader, setEnableLoader] = useState(false);
    
    useEffect(() => {
        const getEditPostInfo = async() =>{
            setEnableLoader(true);
            try {
                if (!id) {
                    throw new Error("id not defined");
                }
                const response =   await axios.get(`${BASE_URL}/${id}`);
                setPost(response.data);    
                setEnableLoader(false);
            } catch (error) {
                console.log("error occurred in getEditPostInfo", error);
                setEnableLoader(false);
            }
        }
        getEditPostInfo();
      }, []);

      const handleChange = (e) =>{
            const {name, value} = e.target;
            setPost((prev) =>({
                ...prev,
                [name]: value
            }))
      }
      const handleSave = async (id) =>{
        setEnableLoader(true);
            try {
                if (!id) {
                    throw new Error("id not defined");
                }
                const response =   await axios.put(`${BASE_URL}/${id}`, post);
                setPost(response.data);    
                setEnableLoader(false);
                successToaster("post updated successfully");

        } catch (error) {
            console.log("error occurred in handle save", error);
            ErrorToaster("please try later");
        }
      }
    return (<>
        <Layout>
        {enableLoader ? <Loader/>  :  <div className=" card-center ">         
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className=" p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Edit post
                        </h3>
                    </div>
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" action="#">
                            <div>
                                <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Title</label>
                                <input type="text" name="title" onChange={handleChange} value={post.title} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div>
                            <label for="body" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body</label>
                                <input type="text" name="body" onChange={handleChange} value={post.body} id="body" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div className=" inline-flex gap-6">
                            <button type="submit" onClick={() => handleSave(post.id)} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                            <a href="/posts" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back</a>
                            </div>  
                        </form>
                    </div>
                </div>
            </div>
        </div> }
        </Layout> 
</>);
}