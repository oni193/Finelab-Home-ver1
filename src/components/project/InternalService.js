import React from 'react';

import Title from '../textSize/Title';
import Subtitle from '../textSize/Subtitle';
import Description from '../textSize/Description';
import img0 from '../../assets/1.png';
import img1 from '../../assets/2.jpg';
import img2 from '../../assets/3.png';
import img3 from '../../assets/4.jpg';



import styled from 'styled-components';
import '../style/serviceAnimation.css';

const InternalService = () => {
    
    const data = {
        title: '대내사업',
        sub: '파인랩은 A+그룹 IT통합 관리 시스템을 운영하며 다양한 사업을 영위하고 있습니다.',
    };    
    const des = ['A+ 그룹 IT 통합 관리 시스템 운영', 
    '웹과 애플리케이션 개발 및 운영', '보험 IT서비스'
    ,'쇼핑몰'];



    const ServiceComponent = styled.div`
        display : grid;
        grid-template-rows: 1fr ;
        grid-template-columns: 1fr 2fr;
        column-gap : 50px;
        height : 900px;
        width : 80%;
        padding-left : 10%;
        padding-right : 10%;
        background-color : white;
    `
    const ServiceLeft = styled.div`
        display : flex;
        flex-direction : column;
        width : 100%;
        height : auto;
        padding-top : 250px;
    `
    const TitleStyle = {
    };
    const ServiceRight = styled.div`
        display : grid;
        grid-template-columns: 1fr 1fr ;
        grid-template-rows : 1fr 1fr ;
        width : 100%;
        height : 200px;
        padding-top : 100px;
        float : right;
        height : auto;
    `;
    const Part = styled.div`
        display : grid;
        grid-template-columns: 1fr ;
        grid-template-rows : 1fr 1fr;
    `;
    const Image = styled.img`
        display : inline-block;
        width : 300px;
        height : 180px;
        :hover {
        cursor: pointer;
        }
     `

    
    return(
            <ServiceComponent >
                <ServiceLeft >
                    <Title text={data.title} style={TitleStyle}/>
                    <Subtitle text={data.sub}/>
                </ServiceLeft>

                <ServiceRight>
                    <Part>
                        <Image src={img0} alt="img"/>       
                        <div className="serviceDescription">
                            <Description text={des[0]} />
                        </div>
                    </Part>
                    <Part>
                        <Image src={img1} alt="img"/>       
                        <div className="serviceDescription">
                            <Description text={des[1]} />
                        </div>
                    </Part>
                    <Part>
                        <Image src={img2} alt="img"/>       
                        <div className="serviceDescription">
                            <Description text={des[2]} />
                        </div>
                    </Part>
                    <Part>
                        <Image src={img3} alt="img"/>       
                        <div className="serviceDescription">
                            <Description text={des[3]} />
                        </div>
                    </Part>
                </ServiceRight>

            </ServiceComponent> 
    );
};

export default InternalService;