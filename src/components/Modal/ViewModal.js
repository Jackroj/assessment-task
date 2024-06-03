import { useEffect, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import axios from 'axios';
import { BASE_URL, BASE_URL_COMMENTS } from '../../utils/constant';
import Comments from './Comments';

export default function ViewModal({post, enableView, setEnableView}) {
  const [comments, setComments] = useState({});

  useEffect(() => {
    const getComments = async() =>{
      try {
        const response = await axios.get(`${BASE_URL_COMMENTS}/${post.id}`);
        setComments(response.data);
      } catch (error) {
        console.log("error occurred in getComments", error);
      }
    }
    getComments();
  }, []);

  return (
    <Transition show={enableView}>
      <Dialog className="relative z-10" onClose={setEnableView}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex max-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
               
                <Comments comments={comments} post={post}/>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
