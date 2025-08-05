// src/components/Certificates.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaCertificate, FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const certificates = [
  {
    title: "JAVA ",
    issuer: "Udemy",
    date: "March 21, 2025",
    description: "Core Java Practice With 120 + Exercise and Quizes",
    rating: 5,
    image: "public/certificates/udemyjava.png",
  },
   {
    title: "Python ",
    issuer: "CTTC",
    date: "June, 2025",
    description: "Basic Pyhton , OOps, Database & GUI , Web Development Using Django",
    rating: 3,
    image: "public/certificates/pythoncttc.png",
  },
   {
    title: "AIML ",
    issuer: "Inspireleap",
    date: "Jan, 2025",
    description: "Artificial Inteligence And Machine Learning ",
    rating: 3,
    image: "public/certificates/udemyjava.png",
  },
   {
    title: "Data Analytics ",
    issuer: "Cisco Network Academy",
    date: "Oct 23, 2023",
    description: "Essential Data Analytics , Load , Transform , Clean , Vizualization ",
    rating: 5,
    image: "public/certificates/Dataanalytics.png",
  },
  {
    title: "AI AZURE ",
    issuer: "Edunet Foundation",
    date: "June, 2025",
    description: "USing AI how to use reallife applications and Advantages ",
    rating: 4,
    image: "/certificates/edunet.png",
  },
  // Add more certificates as needed...
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="certificates"
      className="min-h-screen py-20 bg-transparent flex flex-col items-center justify-center"
    >
      {/* Modal Image View */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative bg-white p-4 rounded-md max-w-3xl w-full shadow-lg">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-2xl text-red-600"
            >
              <IoClose />
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto object-contain rounded-md"
            />
          </div>
        </div>
      )}

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold text-green-500">
          Certificates <span className="text-blue-400">& Achievements</span>
        </h2>
        <p className="text-black-400 mt-2">
          Professional certifications and recognitions
        </p>
      </motion.div>

      {/* Swiper */}
      <div className="w-full max-w-3xl px-4 relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          className="pb-10"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#1a1a3c] text-red-500 rounded-xl shadow-lg p-8 border border-cyan-500"
              >
                <FaCertificate className="text-3xl text-white mb-4" />
                <h3 className="text-2xl font-bold">{cert.title}</h3>
                <p className="text-cyan-300 mt-1 font-semibold">
                  {cert.issuer}
                </p>
                <p className="text-gray-300 mt-2">{cert.description}</p>
                <p className="text-blue-300 mt-4">{cert.date}</p>

                <div className="flex justify-between items-center mt-6">
                  <div className="flex gap-1">
                    {[...Array(cert.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm">
                      Certified
                    </button>
                    <button
                      onClick={() => setSelectedImage(cert.image)}
                      className="bg-blue-600 px-3 py-1 rounded-md text-sm text-white"
                    >
                      View
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
       <div className="flex justify-center items-center gap-8 mt-6">
  <button className="swiper-button-prev-custom text-white text-4xl px-6 py-4 border-2 border-cyan-500 rounded-full bg-gradient-to-br from-black to-gray-800 hover:from-cyan-400 hover:to-cyan-600 hover:text-black transition-all duration-300 shadow-lg hover:shadow-cyan-400/60">
    &lt;
  </button>
  <button className="swiper-button-next-custom text-white text-4xl px-6 py-4 border-2 border-cyan-500 rounded-full bg-gradient-to-br from-black to-gray-800 hover:from-cyan-400 hover:to-cyan-600 hover:text-black transition-all duration-300 shadow-lg hover:shadow-cyan-400/60">
    &gt;
  </button>
</div>
      </div>

      <p className="text-sm text-blue-600 mt-6">
        Click <span className="text-red-600 font-bold">"View"</span> to see
        full certificate image
      </p>
    </section>
  );
};

export default Certificates;
