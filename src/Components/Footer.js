import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6">
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="list-none">
              <li><a href="#home" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Projects</a></li>
              <li><a href="#blogs" className="hover:text-gray-300">Blogs</a></li>
              <li><a href="#resources" className="hover:text-gray-300">Resourses</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6">
            <h3 className="text-lg font-bold mb-3">Courses</h3>
            <ul className="list-none">
              <li><a href="#" className="hover:text-gray-300">Programming</a></li>
              <li><a href="#" className="hover:text-gray-300">React Js</a></li>
              <li><a href="#" className="hover:text-gray-300">JavaScript</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6">
            <h3 className="text-lg font-bold mb-3">Contact Us</h3>
            <p>Email: archanakumari123.co@gmail.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6">
            <h3 className="text-lg font-bold mb-3">Follow Us</h3>
            <div className="flex space-x-2">
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-facebook-square text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-twitter-square text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-instagram-square text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-500">&copy; 2024 Learn React. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
