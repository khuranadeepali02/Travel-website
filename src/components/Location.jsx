import React from "react";

const Location = () => {
  return (
    <div>
      <div>
        <div className="container p-1 sm:p-2 lg:p-4 xl:p-5 2xl:p-6 pb-10">
          <h1
            className="inline-block border-l-8 border-primary/50 py-2 pl-2
                mb-4 text-xl font-bold sm:text-3xl"
          >
            Location to visit
          </h1>
          <div className="rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55335.074193222565!2d73.83785220745577!3d29.90917104913395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917b513d6964015%3A0xb54a4cb83b8f319b!2sSri%20Ganganagar%2C%20Rajasthan%20335001!5e0!3m2!1sen!2sin!4v1740204081504!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ borderRadius: "20px" }} // Corrected style syntax
              allowFullScreen // Corrected JSX syntax
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
