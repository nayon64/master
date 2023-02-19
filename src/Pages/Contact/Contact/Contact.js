import React from "react";
import img1 from "../../../Assets/team/image 1.png";
import img2 from "../../../Assets/team/image 2.png";
import img3 from "../../../Assets/team/image 3.png";
import {  FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="col-span-4">
      <h1 className="text-3xl font-bold text-center my-12 mb-24">
        Team Awesome
      </h1>
      <section className="grid grid-cols-3">
        <div>
          <div className="bg-yellow-300 flex justify-center">
            <img className="-mt-12 h-72" src={img1} alt="" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold mt-6">Robert Bruch</h1>
            <p className="mt-4">Founder</p>
            <div className="w-24 h-1 bg-yellow-300 mx-auto my-4"></div>
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-slate-200 mx-6">
                <FaFacebookF className="text-2xl " />
              </div>
              <div className="p-3 rounded-full bg-slate-200 mx-6">
                <FaTwitter className="text-2xl " />
              </div>
              <div className="p-3 rounded-full bg-slate-200 mx-6">
                <FaPinterestP className="text-2xl " />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-yellow-300 flex justify-center">
            <img className=" -mt-12 h-72" src={img2} alt="" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold mt-6">Robert Bruch</h1>
            <p className="mt-4">Merketing Head</p>
            <div className="w-24 h-1 bg-yellow-300 mx-auto my-4"></div>
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-slate-200 mx-6">
                <FaFacebookF className="text-2xl " />
              </div>
              <div className="p-3 rounded-full bg-slate-200 mx-6">
                <FaTwitter className="text-2xl " />
              </div>
              <div className="p-3 rounded-full bg-slate-200 mx-6">
                <FaPinterestP className="text-2xl " />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-yellow-300 flex justify-center">
            <img className="-mt-12 h-72" src={img3} alt="" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold mt-6">Robert Bruch</h1>
            <p className="mt-4">Support Menager</p>
            <div className="w-24 h-1 bg-yellow-300 mx-auto my-4"></div>
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-slate-200 mx-6">
                <FaFacebookF className="text-2xl " />
              </div>
              <div className="p-3 rounded-full bg-slate-200 mx-6">
                <FaTwitter className="text-2xl " />
              </div>
              <div className="p-3 rounded-full bg-slate-200 mx-6">
                <FaPinterestP className="text-2xl " />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
