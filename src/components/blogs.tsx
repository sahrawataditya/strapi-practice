"use client";
import { deleteBlog } from "@/services/getBlogs";
import React, { FC } from "react";

export const Blogs: FC<{ data: Blog[] }> = ({ data }) => {
  async function handleDelete(id: string) {
    const res = await deleteBlog(id);
    if (res) {
      alert("Blog deleted successfully");
      window.location.reload();
    }
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data && data?.length > 0 ? (
        data.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 relative"
          >
            <button
              onClick={() => handleDelete(blog.documentId)}
              className="absolute top-0 right-0 p-2 hover:bg-gray-200 rounded-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold">{blog.title}</h2>
            <p className="text-gray-600">{blog.subTitle}</p>
          </div>
        ))
      ) : (
        <p className="text-center col-span-3 text-2xl font-bold">No blogs available.</p>
      )}
    </div>
  );
};
