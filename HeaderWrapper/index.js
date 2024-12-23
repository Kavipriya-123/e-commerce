import { useNavigate } from "react-router-dom";

import Header from '../Header'

const HeaderWrapper=()=>{
    const navigate=useNavigate();
    return (<Header navigate={navigate}/>)
}

export default HeaderWrapper;