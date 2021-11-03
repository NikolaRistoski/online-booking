import { List, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

const ScroolList = ({ data }) => {
    return (
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
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <List
                    dataSource={data}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                title={item.name}
                            />
                            <div>{item.rdmValue}</div>

                        </List.Item>
                    )}
                />
            </InfiniteScroll>
        </div>
    )
}

export default ScroolList;