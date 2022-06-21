import React from 'react';
import './first_header.css';

function first_header() {
    return (
        <div>
            {/* <img src="./img/first_header.png" alt="" /> */}
            <ul className='menu0'>
                <li><a href="#">후원</a></li>
                <li><a href="#">봉사</a></li>
                <li><a href="#">교육</a></li>
                <li><a href="#">RCY</a></li>
                <li><a href="#">병원</a></li>
            </ul>
            
            <ul className='menu1'>
                <ul className='menu1_1'>
                    <li><a href="#">대한적십자사소개</a></li>
                    <li><a href="#">사업소개</a></li>
                    <li><a href="#">지사소개</a></li>
                    <li><a href="#">ICRC</a></li>
                    <li><a href="#">IFRC</a></li>
                    <li><a href="#">경영공시</a></li>
                </ul>
                <ul className='menu1_2'>
                    <li><a href="#"><img src="./images/cm_bg01.gif" alt="" />로그인</a></li>
                    <li><a href="#"><img src="./images/cm_bg02.gif" alt="" />회원가입</a></li>
                    <li><a href="#">ENGLISH</a></li>
                </ul>
                <ul className='menu1_3'>
                    <li><a href="#"><img src="./images/fz_b.gif" alt="" /></a></li>
                    <li><a href="#"><img src="./images/fz_r.gif" alt="" /></a></li>
                    <li><a href="#"><img src="./images/fz_s.gif" alt="" /></a></li>
                </ul>
            </ul>
        </div>
     );
}
export default first_header;