import Link from "next/link";
import React from "react";
import grouptravel from "src/styles/GroupTravel.module.css";

const GroupTravel = () => {
  return (
    <>
      <div className={grouptravel.images}>
        <img className={grouptravel.img1} src="/groupt1.png" alt="groupt1" />
        <img className={grouptravel.img2} src="/groupt2.png" alt="groupt2" />
        <img className={grouptravel.img3} src="/groupt3.png" alt="groupt3" />
        <img
          className={grouptravel.img4}
          src="/londonStamp.png"
          alt="londonStamp"
        />
        <img
          className={grouptravel.img5}
          src="/istanbulStamp.png"
          alt="istanbulStamp"
        />
        <img className={grouptravel.img6} src="/groupt4.png" alt="groupt4" />
        <img className={grouptravel.img7} src="/groupt5.png" alt="groupt5" />
        <img
          className={grouptravel.img8}
          src="/lineStamp.png"
          alt="lineStamp"
        />
        <img
          className={grouptravel.img9}
          src="/grouptFrame.png"
          alt="grouptFrame"
        />
        <div className={grouptravel.desc}>
          <h2>Групни патувања</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <Link href={"/grouptravel"}>
            <button className={grouptravel.btnMore}>ПОВЕЌЕ</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GroupTravel;
