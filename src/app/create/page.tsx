"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [blog, setBlog] = useState({
    title: "",
    subTitle: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setloading(true);
    try {
      const response = await fetch(`http://localhost:1337/api/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: blog,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  const handleChange =
    (key: keyof typeof blog) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setBlog((prevState) => ({
        ...prevState,
        [key]: event.target.value,
      }));
    };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg"
    >
      <label className="flex flex-col">
        Title:
        <input
          type="text"
          value={blog.title}
          onChange={handleChange("title")}
          className="p-2 border-2 border-gray-300 rounded-lg"
        />
      </label>
      <br />
      <label className="flex flex-col">
        Subtitle:
        <input
          type="text"
          value={blog.subTitle}
          onChange={handleChange("subTitle")}
          className="p-2 border-2 border-gray-300 rounded-lg"
        />
      </label>
      <br />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
      >
        {loading ? "Creating..." : "Create"}
      </button>
    </form>
  );
};

export default page;
