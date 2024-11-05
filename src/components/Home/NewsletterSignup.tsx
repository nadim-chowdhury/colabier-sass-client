"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., send email to API)
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <div className="py-16 bg-indigo-600 text-white">
      <div className="container px-8 mx-auto text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Stay Updated with Our Newsletter
        </h2>
        <p className="mt-4 text-lg text-indigo-200">
          Subscribe to receive the latest news and updates directly in your
          inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col items-center sm:flex-row sm:justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 mb-4 text-gray-800 rounded-lg sm:mb-0 sm:w-auto sm:flex-grow focus:outline-none"
          />
          <button
            type="submit"
            className="w-full px-6 py-2 font-semibold text-indigo-600 bg-white rounded-lg shadow-md sm:w-auto sm:ml-4 hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
