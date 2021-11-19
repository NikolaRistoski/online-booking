import { Alert } from 'antd';
import { useState } from 'react';
import MoreInfoModal from '../Modal/moreInfoModal.component';

const MoreInfo = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <>
            <Alert message="You may need a patch test" type="info" style={{ background: "#e2f7f5", border: "1px solid #20bab1" }}
                action={
                    <p >
                        more info
                    </p>
                }
                onClick={() => setIsModalVisible(true)}
            />
            {isModalVisible ? <MoreInfoModal isModalVisibleBool={isModalVisible}/> : ''}
        </>
    )
}

export default MoreInfo;