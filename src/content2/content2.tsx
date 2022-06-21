import React from 'react';
import './content2.css';

function content2() {
    return (
        <div className='content2_main'>
            {/* <img src="./img/content2.png" alt="" /> */}
            <h2>
                대한적십자사 혈액관리본부 <span className='bule'>SNS</span>
                <div>
                    <img src="./images/sns_ico02.gif" alt="" />
                    <img src="./images/sns_ico01.gif" alt="" />
                    <img src="./images/sns_ico03.gif" alt="" />
                    <img src="./images/sns_ico05.gif" alt="" />
                </div>
            </h2>
            <ul className='sns'>
                <li>
                    <img className='snslogo' src="./images/sns_ico01.gif" alt="" />
                    <img className='snsimg' src="./images/banner_area_img220601_01.png" alt="" />
                    <p>외국인 헌혈자 이야기</p>
                </li>
                <li>
                    <img className='snslogo' src="./images/sns_ico02.gif" alt="" />
                    <img className='snsimg' src="./images/banner_area_img220601_02.jpg" alt="" />
                    <p>헌혈로 세상을 밝히는 동아리</p>
                </li>
                <li>
                    <img className='snslogo' src="./images/sns_ico03.gif" alt="" />
                    <img className='snsimg' src="./images/banner_area_img220601_03.png" alt="" />
                    <p>헌혈 예약의 역사</p>
                </li>
                <li>
                    <img className='snslogo' src="./images/sns_ico05.gif" alt="" />
                    <img className='snsimg' src="./images/banner_area_img220329_04.jpg" alt="" />
                    <p>헌혈홍보대사 STAYC 위축식</p>
                </li>
            </ul>
        </div>
     );
}
export default content2;