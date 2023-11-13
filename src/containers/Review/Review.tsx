import React from "react";
import {TReviewProps} from "@/containers/Review/Review.types";
import {Col, Row, Typography} from "antd";
import Image from "next/image";
import ImageModel1 from "@/assets/images/image-about.png";
import {dataCarouselHome} from "@/containers/CarouselHome/CarouselHome.data";
import Carousels from "@/components/Carousels";
import {dataCarouselReview} from "@/containers/Review/Review.data";

const Review:React.FC<TReviewProps> = () => {
  return (
    <>
      <section className={'Review'}>
        <div className="container">
          <Row gutter={[24,0]}>
            <Col span={24}>
              <Typography.Title className={"Title text-left"} level={2}>TÔI ĐÃ CHỌN KINGSTUDY</Typography.Title>
            </Col>
            <div className={"Review-carousel"}>
              <Carousels
                infinite={false}
                dots={false}
                arrows={false}
                autoplay={false}
                slidesToShow={3}
                slidesToScroll={3}
              >
                {dataCarouselReview.map((item) => (
                  <div key={item.id} className="Review-carousel-item">
                    <div className="Review-carousel-item-image">
                      <Image src={item.image} alt="" />
                      <div className="Review-carousel-item-text">
                        <Typography.Title className={"Review-carousel-item-text-title"} level={1}>{item.name}</Typography.Title>
                        <Typography.Paragraph className={"Review-carousel-item-text-desc"}>{item.subtitle}</Typography.Paragraph>
                      </div>
                    </div>
                    <div className="Review-carousel-item-info">
                      <Typography.Paragraph className={"Review-carousel-item-info-desc"}>{item.description}</Typography.Paragraph>
                    </div>
                  </div>
                ))}
              </Carousels>
            </div>
          </Row>
        </div>
      </section>
    </>
  )
}
export default Review;
