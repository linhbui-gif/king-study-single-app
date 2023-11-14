import React from "react";
import {Col, Row, Typography} from "antd";
import Image from "next/image";
import Carousels from "@/components/Carousels";
import {TEventHomeProps} from "@/containers/Event/Event.types";
import {dataCarouselEvent} from "@/containers/Event/Event.data";

const Event:React.FC<TEventHomeProps> = () => {
  return (
    <>
      <section className={'Event'}>
        <div className="container">
          <Typography.Title className={"Title"} level={2}>HỘI THẢO SỰ KIỆN DU HỌC</Typography.Title>
          <div className={"Event-carousel"}>
            <Carousels
              infinite={false}
              dots={false}
              arrows={false}
              autoplay={true}
              slidesToShow={3}
              slidesToScroll={3}

            >
              {dataCarouselEvent.map((item) => (
                <div className="Event-carousel-col" key={item.id} >
                  <div className="Event-carousel-item">
                    <div className="Event-carousel-item-image">
                      <Image src={item.image} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </Carousels>
          </div>
        </div>
      </section>
    </>
  )
}
export default Event;
