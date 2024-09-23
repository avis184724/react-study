import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Nav } from "react-bootstrap";
import "../App.css";
import userEvent from '@testing-library/user-event';

// let Box = styled.div`
//     padding : 20px;
//     color : grey;
// `;
// let YelloBtn = styled.button`
//     background : ${props => props.bg};
//     color : black;
//     padding : 10px;
// `;

function TabContent(props){
    let [fade, setFade] = useState('')
    useEffect(() => {
        setTimeout(() => {setFade('end')},100)
        return() =>{
            setFade('')
        }
    },[props.탭])
    return (
        <div className={'start '+fade}>
            {[<div>내용 0</div>,<div>내용 1</div>,<div>내용 2</div>][props.탭]}
        </div>
    )
}

function Detail (props) {
    // useEffect(() => {
    //     console.log("안녕안녕");
    //     setTimeout(() => {
    //         document.getElementById("ye").style.display = 'none'
    //     },2000)
    // })
    // let [count, setCount] = useState(0);

    let {id} = useParams();
    let myItem = props.shoes.find(function(x) {
        return x.id == id
    });

    let [탭,탭변경] = useState(0)

    let [fade2, setFade2] = useState('')
    useEffect(() => {
        setTimeout(() => {setFade2('end')},100)
        return() =>{
            setFade2('')
        }
    },[])

    return (
        <div className={'container start '+fade2}>
            <div className="row">
                <div className="col-md-6">
                    <img src="/shoe1.png" width="100%"></img>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{myItem.title}</h4>
                    <p>{myItem.content}</p>
                    <p>{myItem.price} 원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
                <div>
                    {/* <Box>
                        <YelloBtn bg="orange" onClick={() => {setCount.apply(count+1)}}>오렌지버튼</YelloBtn>
                        <YelloBtn bg="blue">파란버튼</YelloBtn>
                        <YelloBtn bg="yellow" id="ye">d</YelloBtn>
                    </Box> */}
                    <Nav variant="tabs" defaultActiveKey="link0">
                        <Nav.Item>
                            <Nav.Link onClick={()=>{탭변경(0)}} eventKey="link0">버튼 0</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=>{탭변경(1)}} eventKey="link1">버튼 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=>{탭변경(2)}} eventKey="link2">버튼 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <TabContent 탭={탭}/>
                </div>
            </div>
        </div>
    )
}
export default Detail;