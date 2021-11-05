import { Col, List, Row, Skeleton } from 'antd';
import { Button } from 'antd';

import InfiniteScroll from 'react-infinite-scroll-component';
import Consultation from '../Consultation/consultation.component';

import { useState, useEffect } from 'react';

const ScroolList = ({ data }) => {
    
    const [allData, setAllData] = useState([])

    const [selectedCategory, setSelectedCategory] = useState('')

    // Get consultation data
    const getConsultationData = (categoryName) => {
        return data.map(item => {
            if (item.name === categoryName) {
                setSelectedCategory(item.name)

                if (item.allData === undefined) {
                    setAllData(item.subCategory)
                } else {
                    setAllData(item.allData.subCategory)
                }
            }
        })
    }

    useEffect(() => {
        setSelectedCategory('Botox')
    }, [])

    useEffect(() => {
        getConsultationData(selectedCategory)
    }, [selectedCategory])

    return (
        <>
            <Row >
                <Col span={10}>
                    <div
                        id="scrollableDiv"
                        style={{
                            height: 600,
                            width: 400,
                            overflow: 'auto',
                            padding: '0 16px',
                            border: '1px solid rgba(140, 140, 140, 0.35)',
                        }}
                    >
                        <InfiniteScroll
                            dataLength={data.length}
                            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                            scrollableTarget="scrollableDiv"
                        >
                            <List
                                dataSource={data}
                                renderItem={item => (
                                    <Button type="secondary" size="large" style={{ width: "100%", marginBottom: '10px' }}
                                        onClick={() => getConsultationData(item.name)}
                                        className={item.name === selectedCategory ? 'active-element' : ''}
                                    >
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}>
                                            <div>
                                                {item.name}
                                            </div>
                                            <div>{item.rdmValue}</div>
                                        </div>
                                    </Button>

                                )}
                            />
                        </InfiniteScroll>
                    </div>
                </Col>

                <Col span={13}>
                    <Consultation allData={allData} />
                </Col>
            </Row>
        </>
    )
}

export default ScroolList;