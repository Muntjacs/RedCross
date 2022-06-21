import React from 'react';
import './second_header.css';

function second_header() {
    return (
        <div className="Seader_main">
            {/* <img src="./img/second_header.png" alt="" /> */}
            <img className="logo" src="./images/logo.gif" alt="" />
            <ul className='gnb'>
                <li>
                    <a href="#">헌혈지식</a>
                    <ul className="depth2">
                        <li><a href="#">헌혈의 필요성</a></li>
                        <li><a href="#">헌혈에 대한 오해와 진실</a></li>
                        <li><a href="#">헌혈과정</a></li>
                        <li><a href="#">혈액검사</a></li>
                        <li><a href="#">혈액제제</a></li>
                        <li><a href="#">혈액공급</a></li>
                        <li><a href="#">혈액관리시스템</a></li>
                        <li><a href="#">혈액상식</a></li>
                        <li><a href="#">수혈상식</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">헌혈참여</a>
                    <ul className="depth2">
                        <li><a href="#">헌혈의집 찾기</a></li>
                        <li><a href="#">헌혈버스 찾기</a></li>
                        <li><a href="#">헌혈예약</a></li>
                        <li><a href="#">전자문진</a></li>
                        <li><a href="#">안전한 헌혈을 위한 팁</a></li>
                        <li><a href="#">모바일 앱</a></li>
                        <li><a href="#">특정지역 맞춤 서비스</a></li>
                        <li><a href="#">헌혈관련 안내문</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">헌혈활동</a>
                    <ul className="depth2">
                        <li><a href="#">ABO Friends</a></li>
                        <li><a href="#">나눔히어로즈</a></li>
                        <li><a href="#">단체헌혈</a></li>
                        <li><a href="#">생명나눔단체</a></li>
                        <li><a href="#">조혈모세포 기증</a></li>
                        <li><a href="#">봉사회 소개</a></li>
                        <li><a href="#">기부권</a></li>
                        <li><a href="#">기증헌혈증서제도</a></li>
                        <li><a href="#">증명서 발급 및 신청</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">기부금품/사회공헌 참여</a>
                    <ul className="depth2">
                        <li><a href="#">기부금품/사회공헌</a></li>
                        <li><a href="#">접수 확인</a></li>
                        <li><a href="#">생명나눔단체 명예의 전당</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">커뮤니티</a>
                    <ul className="depth2">
                        <li><a href="#">감동이야기</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">고객의 소리</a></li>
                        <li><a href="#">설문조사</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">소식&프로모션</a>
                    <ul className="depth2">
                        <li><a href="#">공지사항</a></li>
                        <li><a href="#">뉴스</a></li>
                        <li><a href="#">프로모션</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">홍보관</a>
                    <ul className="depth2">
                        <li><a href="#">세계헌혈자의 날</a></li>
                        <li><a href="#">헌혈홍보대사 소개</a></li>
                        <li><a href="#">명예의 전당</a></li>
                        <li><a href="#">홍보물</a></li>
                        <li><a href="#">동영상</a></li>
                        <li><a href="#">사진</a></li>
                        <li><a href="#">공모전</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">혈액관리본부 소개</a>
                    <ul className="depth2">
                        <li><a href="#">혈액관리본부 소개</a></li>
                        <li><a href="#">기관 CI</a></li>
                        <li><a href="#">연혁</a></li>
                        <li><a href="#">조직도</a></li>
                        <li><a href="#">캐릭터</a></li>
                        <li><a href="#">오시는길</a></li>
                        <li><a href="#">관련사이트</a></li>
                    </ul>
                </li>
            </ul>
        </div>
     );
}
export default second_header;