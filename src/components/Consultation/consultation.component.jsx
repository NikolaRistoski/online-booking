import { Row, Col } from 'antd';
import { Button } from 'antd';
import { MedicineBoxOutlined, LaptopOutlined } from '@ant-design/icons';

import { useState } from 'react';
import CounsultationCard from '../ConsultationCard/ConsultationCard.component';
import { useEffect } from 'react/cjs/react.development';

const style = {
    textAlign: 'center'
};

const Consultation = ({ allData }) => {
    // State that keep the date for in clinic and online services
    const [inClinic, setInClinic] = useState([])
    const [online, setOnline] = useState([])

    // State for rendering services depending of user selected filter (button)
    const [isOnline, setIsOnline] = useState(false)
    const [isClinic, setIsClinic] = useState(false)

    // Is service virtual avaliable
    const [isCategoryVirtualAvaliable, setIsCategoryVirtualAvaliable] = useState(null)

    // Filter for Virtual Consultation filter (button)
    const handleOnline = () => {
        const onlineArr = []

        allData.map(item => {
            if (item.online === true || item.online === undefined) {
                onlineArr.push(item)
            }
        })

        setOnline(onlineArr)
        setIsOnline(true)
        setIsClinic(false)
    }

    // Filter for In Clinic filter (button)
    const handleClinic = () => {
        const clinicArr = []

        allData.map(item => {
            if (item.online === false || item.online === undefined) {
                clinicArr.push(item)
            }
        })

        setInClinic(clinicArr)

        setIsClinic(true)
        setIsOnline(false)
    }

    // Check if service is avaliable online
    const checkService = () => {
        allData.map(item => {
            if (item.online === undefined) {
                setIsCategoryVirtualAvaliable(false)
            } else {
                setIsCategoryVirtualAvaliable(true)
            }
        })
    }

    useEffect(() => {
        handleClinic()
        setIsClinic(true)
        checkService()
    }, [allData])

    return (
        <>

            {/* Filter buttons In Clinic and Virtual Consultation */}
            <Row style={style}>
                {
                    isCategoryVirtualAvaliable ? <>
                        <Col span={12}>
                            <Button type="secondary" icon={<MedicineBoxOutlined />} size="large" style={{ width: "100%", color: '#737387' }} onClick={() => handleClinic()}
                                className={isClinic ? 'active-element' : ''}
                            >
                                In clinic
                            </Button>
                        </Col>
                        <Col span={12}>
                            <Button type="secondary" icon={<LaptopOutlined />} size="large" style={{ width: "100%", color: '#737387' }} onClick={() => handleOnline()}
                                className={isOnline ? 'active-element' : ''}

                            >
                                Virtual Consultation
                            </Button>
                        </Col>
                    </> : <>
                        <Col span={24}>
                            <Button type="secondary" icon={<MedicineBoxOutlined />} size="large" style={{ width: "100%" }} onClick={() => handleClinic()}
                                className={isClinic ? 'active-element' : ''}
                            >
                                In clinic
                            </Button>
                        </Col>
                    </>
                }

            </Row>

            <Row>
                {/* If user select Virtual Consultation button */}
                {
                    isOnline && online.map(item => {
                        const { name, price, time, rating, review } = item;
                        return (
                            <CounsultationCard key={name} name={name} price={price} time={time} rating={rating} review={review} />
                        )
                    })
                }
                {/* If user select In Clinic button */}
                {
                    isClinic && inClinic.map(item => {
                        const { name, price, time, rating, review } = item;
                        return (
                            <CounsultationCard key={name} name={name} price={price} time={time} rating={rating} review={review} />
                        )
                    })
                }
            </Row>
        </>
    )
}

export default Consultation;