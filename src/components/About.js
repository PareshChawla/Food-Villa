import React from "react";

const About = () => {
  return (
    <div className="min-h-screen max-w-2xl mx-auto p-6">
      <h1 className="text-xl md:text-3xl font-bold mb-6 text-gray-800 text-center mt-2 md:mt-4">
        About Food Villa
      </h1>

      <section className="mb-2 md:mb-8">
        <p className="text-gray-700 mb-8 text-sm md:text-base">
          Food Villa is a React app that I developed to bring the joy of online
          food ordering to users. The project served as a valuable learning
          experience for exploring and honing my skills in React. It utilizes
          the Live Swiggy API to fetch real-time restaurant details and menus.
          Here are some key features of the app:
        </p>
        <ul className="list-disc pl-4 mb-4 space-y-2 md:space-y-4 text-sm md:text-base">
          <li>
            <span className="font-bold text-sm md:text-base">
              Dynamic Restaurant Listings:
            </span>{" "}
            Browse a variety of restaurants dynamically fetched from Swiggy's
            extensive database.
          </li>
          <li>
            <span className="font-bold text-sm md:text-base">
              Search Functionality:
            </span>{" "}
            Implemented a search feature using the filterData function.
          </li>
          <li>
            <span className="font-bold text-sm md:text-base">
              Interactive Restaurant Menus:
            </span>{" "}
            Explore detailed menus for each restaurant, including categories and
            item descriptions.
          </li>
          <li>
            <span className="font-bold text-sm md:text-base">
              Shopping Cart Functionality:
            </span>{" "}
            Easily add items to your cart, review your selections, and proceed
            to checkout.
          </li>
          <li>
            <span className="font-bold text-sm md:text-base">
              Lazy Loading:
            </span>{" "}
            Components are lazy-loaded for improved performance.
          </li>
          <li>
            <span className="font-bold text-sm md:text-base">
              Contact Form with EmailJS:
            </span>{" "}
            Designed a contact form using EmailJS for user inquiries and
            feedback.
          </li>
          <li>
            <span className="font-bold text-sm md:text-base">
              State Management with Redux:
            </span>{" "}
            Utilized Redux for efficient state management, ensuring a cohesive
            and scalable application.
          </li>
        </ul>
        <p className="text-gray-700 mt-4 md:mt-8 text-sm md:text-base">
          This project was not only a technical challenge but also a delightful
          opportunity to create a seamless and enjoyable user experience for
          food enthusiasts.
        </p>
      </section>
    </div>
  );
};

export default About;
