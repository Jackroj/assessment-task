
import { Fragment } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

export default function Comments({comments, post}) {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 max-w-[100%] lg:max-w-7xl lg:px-8">
        {/* Product */}
        <div className="">
          

          {/* Product details */}
          <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{post.title}</h1>
              </div>
            </div>

            <p className="mt-6 text-gray-500">{post.body}</p>

          </div>

          <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
            <TabGroup>
              <div className="border-b border-gray-200 mt-4">
                <TabList className="-mb-px flex space-x-8">
                  <Tab
                    className={'border-indigo-600 text-indigo-600'}
                  >
                    Comments
                  </Tab>
                  
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                <TabPanel className="-mb-10 ">
                  <h3 className="sr-only">Comments Reviews</h3>
                    <div key={comments.id} className="flex space-x-4 text-sm text-gray-500">
                      <div className={'border-t border-gray-200 py-10'}>
                        <h3 className="font-medium text-gray-900">{comments.name}</h3>
                        <p>
                            {comments.email}
                        </p>
                        <div
                          className="prose prose-sm mt-4 max-w-none text-gray-500"
                          dangerouslySetInnerHTML={{ __html: comments.body }}
                        />
                      </div>
                    </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
