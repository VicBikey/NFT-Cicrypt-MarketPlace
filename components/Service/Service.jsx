import Image from "next/image";
import images from "../../img";
import Style from "./Service.module.css";
import React from "react";

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image/>
          <p className={Style.service_box_item_step}>
            <span>Explore</span>
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Discover</span>
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt="Connect Wallet"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Connect Wallet</span>
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image/>
          <p className={Style.service_box_item_step}>
            <span>Trade</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;