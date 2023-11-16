import React, {useState} from "react";
import {Col, Modal, Row, Skeleton, Typography} from "antd";
import Carousels from "@/components/Carousels";
import env from "@/env";

const Feedback: React.FC = ({ loading, data }:any) => {
  const dataContent = data?.items
  const [open, setOpen] = useState<any>(false);
  const [iframeLink, setIframeLink] = useState('');
  const Loading = () => {
    return (
      <>
        <Typography.Title className={"Title"} level={2}><Skeleton.Input active size={"small"} /></Typography.Title>
        <div className={"Feedback-carousel"}>
          <Carousels
            infinite={true}
            dots={false}
            arrows={false}
            autoplay={true}
            slidesToShow={3}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 1600,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 575,
                settings: {
                  slidesToShow: 2,
                },
              }
            ]}
          >
            {[1,2,3].map((item:any) => (
              <div className="Feedback-carousel-col" key={item.id} >
                <div className="Feedback-carousel-item">
                  <div className="Feedback-carousel-item-image">
                    <Skeleton.Image />
                  </div>
                </div>
              </div>
            ))}
          </Carousels>
        </div>
      </>
    )
  }
  const openModal = (link:any) => {
    setOpen(true)
    setIframeLink(link)
  }
  return (
    <>
      {open && (
        <>
          <Modal className={"Modal-feedback"} title={"Feedback"} centered visible={open} footer={false} onCancel={() => setOpen(false)} width={1000}>
            <iframe
              width="100%"
              height={500}
              src={iframeLink}
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </Modal>
        </>
      )}
      <section className={'Feedback'}>
        <div className="container">
          {loading && Loading()}
          {
            !loading && (
              <>
                <Typography.Title className={"Title"} level={2}>CÂU CHUYỆN DU HỌC SINH</Typography.Title>
                <div className={"Feedback-carousel"}>
                  <Carousels
                    infinite={true}
                    dots={false}
                    arrows={false}
                    autoplay={true}
                    slidesToShow={3}
                    slidesToScroll={1}
                    responsive={[
                      {
                        breakpoint: 1600,
                        settings: {
                          slidesToShow: 3,
                        },
                      },
                      {
                        breakpoint: 1200,
                        settings: {
                          slidesToShow: 2,
                        },
                      },
                      {
                        breakpoint: 575,
                        settings: {
                          slidesToShow: 1,
                        },
                      }
                    ]}
                  >
                    {dataContent && dataContent[18].map((item:any) => (
                      <div className="Feedback-carousel-col" key={item.id} >
                        <div className="Feedback-carousel-item">
                          <div className="Feedback-carousel-item-image">
                            <img src={env.api.baseUrl.backend + item['image_location']} alt="" />
                          </div>
                          <div className="icon" onClick={() => openModal(item?.link)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={45}
                              height={45}
                              viewBox="0 0 45 45"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_983_9163)">
                                <path
                                  d="M44.0728 11.6977C43.5541 9.76992 42.0342 8.25038 40.1068 7.73128C36.5854 6.76758 22.4996 6.76758 22.4996 6.76758C22.4996 6.76758 8.41412 6.76758 4.89267 7.69455C3.00235 8.2133 1.44538 9.77027 0.926624 11.6977C0 15.2188 0 22.5212 0 22.5212C0 22.5212 0 29.8604 0.926624 33.3448C1.44573 35.2722 2.96527 36.7921 4.89302 37.3112C8.4512 38.2749 22.4999 38.2749 22.4999 38.2749C22.4999 38.2749 36.5854 38.2749 40.1068 37.3479C42.0345 36.8291 43.5541 35.3093 44.0732 33.3818C44.9998 29.8604 44.9998 22.5583 44.9998 22.5583C44.9998 22.5583 45.0369 15.2188 44.0728 11.6977Z"
                                  fill="#FF0000"
                                />
                                <path
                                  d="M18.0146 29.2679L29.7277 22.5217L18.0146 15.7754V29.2679Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_983_9163">
                                  <rect width={45} height={45} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
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
export default Feedback;
