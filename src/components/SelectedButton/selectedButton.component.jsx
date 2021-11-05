import { Button } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const SelectedButton = () => {
    return (
        <Button type="primary" icon={<CheckCircleOutlined />} size='large' style={{
            background:"#54b2d3"
        }}>
            Selected
        </Button>
    )
}

export default SelectedButton;