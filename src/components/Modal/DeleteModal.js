import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader";
import { ErrorToaster, successToaster } from "../../config/toaster";
import { BASE_URL } from "../../utils/constant";
import Layout from "../../views/Layout";

export default function DeleteModal(){
    const {id} = useParams();
    const [enableLoader, setEnableLoader] = useState(false);
    const navigate = useNavigate();
    const handleDelete = async(id) =>{
        setEnableLoader(true);
        try {
            if (!id) {
                throw new Error("id not defined");
            }
            const response =   await axios.delete(`${BASE_URL}/${id}`); 
            setEnableLoader(false);
            successToaster("post deleted successfully");
            navigate("/posts")
        } catch (error) {
            console.log("error occurred in handle delete ", error);
            ErrorToaster("please try later");
            
        }
    }
    return(<>
    <Layout>
    {!enableLoader ? <div className="card-center">
    <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
                <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this Post?</h3>
                <button type="button" onClick={() => handleDelete(id)} className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                    Yes, I'm sure
                </button>
                <Link  to={"/posts"} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</Link>
            </div>
        </div>
    </div>
</div> : <Loader/>}
    </Layout>
    </>);
}