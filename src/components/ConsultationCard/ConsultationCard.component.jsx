import { QuestionCircleOutlined, ClockCircleOutlined, LaptopOutlined, StarFilled } from "@ant-design/icons";
import { Badge, Row, Col } from "antd";
import { Card } from 'antd';
import { useState, useEffect } from "react";

import SelectedButton from '../SelectedButton/selectedButton.component'
import MoreInfo from '../MoreInfo/moreInfo.component'
import MoreInfoModal from "../Modal/moreInfoModal.component";

const CounsultationCard = ({ name, price, time, rating, review }) => {
    // Store for selected subCategori Id and rendering button
    const [selectedSubCategory, setSelectedSubCategory] = useState([]);

    // Remove white space from string
    const elementId = name.replace(/ /g, "");


    return (
        <>
            <Card id={elementId} style={{ width: "100%", marginTop: "1.2rem", padding: '10px' }} hoverable className="on-hover"
                onClick={() => {
                    // if card is already selected remove button and if not add button selected
                    selectedSubCategory === name.replace(/ /g, "") ? setSelectedSubCategory('') : setSelectedSubCategory(elementId)
                }}
            >
                <Row>
                    <Col span={20}>
                        <p className="card-name">{name} <span style={{ fontSize: "14px" }}><QuestionCircleOutlined /> <LaptopOutlined /></span></p>
                    </Col>
                    <Col span={4}>
                        <p className="price"><span style={{ marginRight: "5px" }}>&#163;</span>{price}</p>
                    </Col>
                    <Col span={24}>
                        <p className="time">{time} min <ClockCircleOutlined />  <Badge status="default" /> 2 services</p>
                    </Col>

                    <Col span={18}>
                        <p style={{ display: 'flex' }}>
                            {Array(rating)
                                .fill()
                                .map((_, i) => (
                                    <StarFilled key={i} style={{ fontSize: "20px", color: '#fadb14', marginRight: "10px" }} />
                                ))}  <span className="review-span">{review} review</span>
                        </p>
                    </Col>
                    {
                        selectedSubCategory === name.replace(/ /g, "") ? <><Col span={6}>
                            <SelectedButton />
                        </Col></> : ''
                    }

                </Row>
            </Card>
            <Row style={{width: '100%', marginTop:'10px'}}>
                    {
                        selectedSubCategory === name.replace(/ /g, "") ? <><Col span={24}>
                            <MoreInfo />
                        </Col></> : ''
                    }
            </Row>
        </>
    )
}

export default CounsultationCard;