import React, {useState} from "react";
import {Card} from "antd";
import ReactCardFlip from 'react-card-flip';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {actionSelectOneProduct} from "./../../../Redux/Actions/selectOneProduct"

const {Meta} = Card;
const CardBlock = (props) => {

    const {dataItem, selectOne} = props;
    const [isFlipped, changeFlipped] = useState(0);
    const toggleFlipped = () => changeFlipped(!isFlipped);
    const doSelect = () => selectOne(dataItem);

    return (
        <ReactCardFlip key={dataItem.id} isFlipped={isFlipped} flipDirection='horizontal'>

            <div><Card
                hoverable
                style={{width: 240, height: 400, padding: 10}}
                cover={<img alt="example" src={dataItem.url} width="240px"/>}
                onClick={toggleFlipped}
            >
                <Meta title="Europe Street beat" description="www.instagram.com"/>
            </Card>
            </div>
            <div>
                <Card

                    hoverable
                    style={{width: 240, height: 400, padding: 10, color: "black"}}
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

const action = {
    selectOne: actionSelectOneProduct,
};
export default connect(null, action)(CardBlock);