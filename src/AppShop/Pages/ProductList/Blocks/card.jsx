import React, {useState} from "react";
import {Link} from "react-router-dom";
import ReactCardFlip from 'react-card-flip';
import {Card} from "antd";
import styles from './card.module.css';

const {Meta} = Card;
const CardBlockComponent = (props) => {

    const {dataItem, selectOne} = props;
    const [isFlipped, changeFlipped] = useState(0);
    const toggleFlipped = () => changeFlipped(!isFlipped);
    const doSelect = () => selectOne(dataItem);

    return (
        <ReactCardFlip key={dataItem.id} isFlipped={isFlipped} flipDirection='horizontal'>
            <div><Card
                hoverable
                className={styles.card}
                cover={<img alt="example" src={dataItem.url} width="240px"/>}
                onClick={toggleFlipped}
            >
                <Meta title="Europe Street beat" description="www.instagram.com"/>
            </Card>
            </div>
            <div>
                <Card
                    hoverable
                    className={styles.card}
                    onClick={toggleFlipped}
                >
                    <h1>{dataItem.name}</h1>
                    <p>{dataItem.description}</p>
                    <Link key={"1"} to="/productDetails"><span onClick={doSelect}>Read more...</span></Link>
                </Card>
            </div>
        </ReactCardFlip>
    )
};

export default CardBlockComponent;
