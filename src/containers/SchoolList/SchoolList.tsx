import React from "react";
import Link from "next/link";
import {Skeleton} from "antd";
import env from "@/env";

const SchoolList = ({loading, data}: any) => {
  const Loading = () => {
    return (
      <section className={'SchoolList'}>
        <div className="container">
          <div className="SchoolList-wrapper">
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map((element: any) => {
                return (
                  <div className="SchoolList-wrapper-item" key={element}>
                    <div className="SchoolList-wrapper-item-block">
                      <div className="SchoolList-wrapper-item-block-image">
                        <Skeleton.Image />
                      </div>
                      <div className="line"></div>
                      <div className="SchoolList-wrapper-item-block-info">
                        <Link href={"/"} className={'SchoolList-wrapper-item-block-info-title'}><Skeleton.Input active size={"small"} /></Link>
                        <p className="SchoolList-wrapper-item-block-info-des">
                          <Skeleton active paragraph={true}/>
                        </p>
                        <div className="SchoolList-wrapper-item-block-info-bottom">
                          <div className="SchoolList-wrapper-item-block-info-bottom-country">
                            <div className="SchoolList-wrapper-item-block-info-bottom-country-flag">
                              <Skeleton.Avatar />
                            </div>
                            <Skeleton.Input active size={"small"} />
                          </div>
                          <div className={'modify'}><Skeleton.Input active size={"small"} /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    )
  }
  return (
    <>
      {loading && Loading()}
      <section className={'SchoolList'}>
        <div className="container">
          <div className="SchoolList-wrapper">
            {!loading && (
              <>
                {data && data.map((element: any) => {
                  return (
                    <div className="SchoolList-wrapper-item" key={element?.id}>
                      <div className={`SchoolList-wrapper-item-block ${element?.type_school == 3 ? 'odd' : element?.type_school == 2 ? 'even' : 'custom_red'}`}>
                        <div className="SchoolList-wrapper-item-block-image">
                          <img src={env.api.baseUrl.backend + element['logo']} alt=""/>
                        </div>
                        <div className="line"></div>
                        <div className="SchoolList-wrapper-item-block-info">
                          <Link href={"/"} className={'SchoolList-wrapper-item-block-info-title'}>{element?.name}</Link>
                          <p className="SchoolList-wrapper-item-block-info-des">
                            {element?.heading}
                          </p>
                          <div className="SchoolList-wrapper-item-block-info-bottom">
                            <div className="SchoolList-wrapper-item-block-info-bottom-country">
                              <div className="SchoolList-wrapper-item-block-info-bottom-country-flag">
                                <img
                                  src={env.api.baseUrl.backend + element['country']['icon']}
                                  alt=""/>
                              </div>
                              {element['country']['name']}
                            </div>
                            <div className={`SchoolList-wrapper-item-block-info-bottom-tag ${element?.type_school == 3 ? 'Available' : element?.type_school == 2 ? 'Partner' : 'Close'}`}>
                              {element?.type_school == 3 ? 'Available' : element?.type_school == 2 ? 'Partner' : 'Close'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
                }
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
export default SchoolList;
