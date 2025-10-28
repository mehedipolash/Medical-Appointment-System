import React, { useState } from "react";
import { useLoaderData } from "react-router";

const BlogItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 transition hover:shadow-xl">
      <button
        className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800 focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {question}
        <span className={`transform transition-transform ${open ? "rotate-45" : "rotate-0"}`}>
          +
        </span>
      </button>
      {open && (
        <div className="mt-2 text-gray-600 text-sm md:text-base">
          {answer}
        </div>
      )}
    </div>
  );
};

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
        React Router Q&A
      </h1>
      <p className="text-center text-gray-500 mb-12">
        Find answers to commonly asked questions about React Router.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            question={blog.question}
            answer={blog.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
