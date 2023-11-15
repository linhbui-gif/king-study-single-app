import React from "react";
import {TReviewProps} from "@/containers/Review/Review.types";
import {Col, Row, Skeleton, Typography} from "antd";
import Image from "next/image";
import Carousels from "@/components/Carousels";
import {dataCarouselReview} from "@/containers/Review/Review.data";
import env from "@/env";

const Review: React.FC<TReviewProps> = ({loading, data}) => {
  const dataContent = data?.items
  const Loading = () => {
    return (
      <>
        <Typography.Title className={"Title text-left"} level={2}><Skeleton.Input active size={"small"}/></Typography.Title>
        <div className={"Review-carousel"}>
          <Carousels
            infinite={false}
            dots={false}
            arrows={false}
            autoplay={true}
            slidesToShow={3}
            slidesToScroll={3}

          >
            {
              [1,2,3].map((element: any) => {
                return (
                  <div className="Review-carousel-col" key={element.id}>
                    <div className="Review-carousel-item">
                      <div className="Review-carousel-item-image">
                        <Skeleton.Avatar/>
                        <div className="Review-carousel-item-text">
                          <h1 className={"Review-carousel-item-text-title"}><Skeleton.Input active size={"small"}/></h1>
                          <p className={"Review-carousel-item-text-desc"}><Skeleton.Input active size={"small"}/></p>
                        </div>
                      </div>
                      <div className="Review-carousel-item-info">
                        <Typography.Paragraph className={"Review-carousel-item-info-desc"}><Skeleton active
                                                                                                     paragraph={true}/></Typography.Paragraph>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </Carousels>
        </div>
      </>
    )
  }
  return (
    <>
      <section className={'Review'}>
        <div className="container">
          {loading && Loading()}
          {
            !loading && (
              <>
                <Typography.Title className={"Title text-left"} level={2}>TÔI ĐÃ CHỌN KINGSTUDY</Typography.Title>
                <div className={"Review-carousel"}>
                  <Carousels
                    infinite={false}
                    dots={false}
                    arrows={false}
                    autoplay={true}
                    slidesToShow={3}
                    slidesToScroll={3}

                  >
                    {dataContent && dataContent[16].map((element: any) => {
                      return (
                        <div className="Review-carousel-col" key={element.id}>
                          <div className="Review-carousel-item">
                            <div className="Review-carousel-item-image">
                              <img src={env.api.baseUrl.backend + element['image_location']} alt=""/>
                              <div className="Review-carousel-item-text">
                                <h1 className={"Review-carousel-item-text-title"}>{element['locale_vi']['title']}</h1>
                                <p className={"Review-carousel-item-text-desc"}>{element['locale_vi']['subtitle']}</p>
                              </div>
                            </div>
                            <div className="Review-carousel-item-info">
                              <Typography.Paragraph
                                className={"Review-carousel-item-info-desc"}>{element['locale_vi']['description']}</Typography.Paragraph>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </Carousels>
                </div>
              </>
            )
          }
        </div>
      </section>
    </>
  )
}
export default Review;
