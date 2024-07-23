import {Link} from "react-router-dom";


type Props = {
    to : string;
    bg : string;
    text : string;
    textstring : string;
    onClick? : () => Promise<void>;
};

const NavLink = (props : Props) => {
    return <Link to={props.to} className={`btn btn-${props.bg} btn-lg`}>{props.text} {props.textstring}</Link>


const 