import React from "react";
import default_photo from "../assets/images/1.jpg";
import Post from "./post";

const AccountPage = () => {
  return (
    <div>
      <div className="bg-gray-400 w-full px-4 md:px-20 lg:px-28 pt-3">
        <div>
          <img
            src={default_photo}
            alt="cover_photo"
            className="w-full h-[40vh] object-cover rounded-lg"
          />
          {/*cover photo */}
        </div>
        <div>
          {/*profile photo */}
          <img
            src={default_photo}
            alt="default"
            className="w-36 h-36 border-white border-4 relative top-[-1.7em] left-[3em] cursor-pointer rounded-full"
          />
        </div>
      </div>
      <Post image={default_photo} />
    </div>
  );
};

export default AccountPage;
