import { Row, Col } from 'antd';
import { Button } from 'antd';
import { MedicineBoxOutlined, LaptopOutlined } from '@ant-design/icons';

import { useState } from 'react';
import CounsultationCard from '../ConsultationCard/ConsultationCard.component';
import { useEffect } from 'react/cjs/react.development';

// GraphQL Query
import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../GraphQL/Queries";


const style = {
    textAlign: 'center'
};

const Consultation = ({ allData }) => {
  const { loading, error, data } = useQuery(GET_SERVICES_BY_CATEGORY);


    // State that keep the data for in clinic and online services
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
            if (item.in_clinic === false) {
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
        console.log('handleClinic data', allData)
        allData.map(item => {
            if (item.in_clinic === true) {
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
          if (item.in_clinic === true) {
                setIsCategoryVirtualAvaliable(false)
            } else if(item.in_clinic === false){
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
  {console.log(isCategoryVirtualAvaliable)}
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