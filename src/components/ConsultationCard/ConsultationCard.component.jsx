import { QuestionCircleOutlined, ClockCircleOutlined, LaptopOutlined, StarOutlined } from "@ant-design/icons";
import { Badge, Row, Col } from "antd";
import { Card } from 'antd';


const CounsultationCard = ({ name, price, time, rating, review }) => {
    return (
        <Card style={{width:"100%", marginTop:"1.2rem", padding:'10px'}} hoverable className="on-hover">
            <Row>
                <Col span={20}>
                    <p className="card-name">{name} <span style={{fontSize:"14px"}}><QuestionCircleOutlined /> <LaptopOutlined /></span></p>
                </Col>
                <Col span={4}>
                    <p className="price"><span style={{marginRight:"5px"}}>&#163;</span>{price}</p>
                </Col>
                <Col span={24}>
                    <p className="time">{time} min <ClockCircleOutlined />  <Badge status="default" /> 2 services</p>
                </Col>
                <Col span={24}>
                    <p style={{display:'flex'}}>
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <StarOutlined key={i} style={{fontSize:"20px", color:'#dedede'}}/>
                            ))}  <span className="review-span">{review} review</span>
                    </p>
                </Col>
            </Row>
        </Card>

    )
}

export default CounsultationCard;