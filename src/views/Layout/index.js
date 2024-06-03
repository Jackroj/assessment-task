import { useState } from "react";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import AddModal from "../../components/Modal/addModal";
import axios from "axios";
import { ErrorToaster, successToaster } from "../../config/toaster";
import { BASE_URL } from "../../utils/constant";


export default function Layout({children, setPosts}){
    const [open, setOpen] = useState(false);
    const [enableLoader, setEnableLoader] = useState(false);

    const handleAdd = async(params) =>{
        try {
            if (!params.title && !params.body) {
                throw new Error("form values not defined");
            }
            const response =  await axios.post(`${BASE_URL}`, params);
            successToaster("post added successfully");
            setPosts((prev) => ([...prev, response.data]));
            setEnableLoader(false);
        } catch (error) {
            console.log("error occurred in getEditPostInfo", error);
            ErrorToaster("please try later");
            setEnableLoader(false);
        }
        setOpen(false);
    }
    return (<>
    <Header setOpen={setOpen} open={open}/>
    {open && <AddModal handleAdd={handleAdd} setOpen={setOpen} open={open}/>}
    {enableLoader && <Loader/>}
    {children}
    </>);
}