import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div class="flex items-center justify-center h-screen">
      <div class="flex flex-col items-center justify-center max-w-lg">
        <div class="mb-4">
          <h1 class="text-5xl font-extrabold text-blue-600">503</h1>
        </div>
        <h3 class="mb-3 text-2xl font-bold text-center text-gray-700">
          Temporarily down for maintenance We’ll be back soon!
        </h3>
        <p class="text-sm text-center text-gray-600">
          Sorry for the inconvenience but we’re performing some maintenance at
          the moment. If you need to you can always{" "}
          <Link to="/" class="text-blue-600 hover:underline">
            Contact us{" "}
          </Link>
          , otherwise we’ll be back online shortly! — The Team denTist
        </p>
      </div>
    </div>
  );
};

export default About;
