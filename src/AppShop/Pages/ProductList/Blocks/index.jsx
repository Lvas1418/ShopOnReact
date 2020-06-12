import {actionSelectOneProduct} from "../../../Redux/Actions/selectOneProduct";
import {connect} from "react-redux";
import CardBlockComponent from "./card";


const action = {
    selectOne: actionSelectOneProduct,
};
const CardBlock = connect(null, action)(CardBlockComponent);
export default CardBlock;
