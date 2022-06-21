import React from 'react';
import './first_footer.css';

function first_footer() {
    return (
        <div className='footer_main'>
            {/* <img src="./img/first_footer.png" alt="" /> */}
            <img src="./images/phone_ico.gif" alt="" />
            <p>
                CRM센터
                <span className='foo_red'> 1600-3705 </span>
                <span className='foo_bgb'>유료/발신자 부담</span>
                <span className='foo_sub'> (월~금 09:00 ~ 20:00 / 토, 일, 공휴일 10:00 ~ 18:00)</span>
            </p>
            <img className='gotop' src="./images/go_top.gif" alt="" />
        </div>
     );
}
export default first_footer;