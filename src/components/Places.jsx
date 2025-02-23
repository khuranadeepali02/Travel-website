import React from 'react';
import { motion } from 'framer-motion';
import Img1 from '../assets/img1.webp';
import Img2 from '../assets/img2.webp';
import Img3 from '../assets/img3.webp';
import Img4 from '../assets/img4.webp';
import Img5 from '../assets/img5.webp';
import Img6 from '../assets/img6.webp';
import PlacesCard from './PlacesCard';

const PlacesData = [
    {
        img: Img1,
        title: "Boat Tour",
        location: "USA",
        description: "A boat tour in the USA offers a fantastic way to explore the country's stunning waterways, coastal regions, lakes, and rivers.",
        price: 100,
        type: "Cultural Relax",
    },
    {
        img: Img2,
        title: "Taj Mahal",
        location: "India",
        description: "The Taj Mahal, located in Agra, India, is a stunning white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife, Mumtaz Mahal.",
        price: 6700,
        type: "Cultural Relax",
    },
    {
        img: Img3,
        title: "Underwater",
        location: "US",
        description: "The underwater world in the U.S. is home to vibrant coral reefs, deep-sea shipwrecks, and diverse marine life.",
        price: 6200,
        type: "Cultural Relax",
    },
    {
        img: Img4,
        title: "Sydney",
        location: "Australia",
        description: "Sydney, Australia, is a vibrant city known for its iconic landmarks like the Sydney Opera House and Harbour Bridge.",
        price: 6700,
        type: "Cultural Relax",
    },
    {
        img: Img5,
        title: "Los Angeles",
        location: "United States",
        description: "Los Angeles, known as the City of Angels, is a global hub for entertainment, famous for Hollywood, beautiful beaches, and diverse culture.",
        price: 6700,
        type: "Cultural Relax",
    },
    {
        img: Img6,
        title: "Las Vegas",
        location: "USA",
        description: "Las Vegas, famous for its vibrant nightlife, casinos, and entertainment, offers an unparalleled experience for visitors worldwide.",
        price: 6200,
        type: "Cultural Relax",
    },
];

// Motion Variants
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.2, duration: 0.5 },
    }),
};

const Places = ({ handleOrderPopup }) => {
    return (
        <div className="bg-gray-300 py-10 p-10">
            <div className="container p-1 sm:p-2 lg:p-4 xl:p-5 2xl:p-6">
                <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
                    Best Places to Visit
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {PlacesData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={index}
                        >
                            <PlacesCard handleOrderPopup={handleOrderPopup} {...item} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Places;
