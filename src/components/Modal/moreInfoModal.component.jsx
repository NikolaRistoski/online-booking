import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const MoreInfoModal = ({isModalVisibleBool}) => {
    const [isModalVisible, setIsModalVisible] = useState(isModalVisibleBool);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Modal
                visible={isModalVisible}
                title="Title"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        I understand
                    </Button>
                ]}
            >
                <h3>Patch test</h3>
                <p>
                    To make sure your skin doesen’t react to the products used in your treatment, please book a patch test for at least 48 hours before your appointment.
                </p>
                <p>
                    To make sure your skin doesen’t react to the products used in your treatment, please book a patch test for at least 48 hours before your appointment.
                </p>
            </Modal>
        </>
    )
}

export default MoreInfoModal