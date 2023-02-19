import React from "react";
import img1 from "../../../Assets/team/image 1.png";
import img2 from "../../../Assets/team/image 2.png";
import img3 from "../../../Assets/team/image 3.png";

const Contact = () => {
  return (
    <div className="col-span-4">
      <h1 className="text-3xl font-bold text-center my-12">Team Awesome</h1>
      <section className="grid grid-cols-3">
        <div>
          <div className="bg-yellow-300 ">
            <img className="-pt-12 " src={img1} alt="" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl">Robert Bruch</h1>
            <p>Founder</p>
          </div>
        </div>
        <div>
          <div className="bg-yellow-300 ">
            <img className="-pt-12 " src={img2} alt="" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl">Robert Bruch</h1>
            <p>Founder</p>
          </div>
        </div>
        <div>
          <div className="bg-yellow-300 ">
            <img className="-pt-12 " src={img3} alt="" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl">Robert Bruch</h1>
            <p>Founder</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
