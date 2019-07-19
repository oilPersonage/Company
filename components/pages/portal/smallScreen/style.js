import styled from 'styled-components'
import c from '../../../../styled/color'

export const Container = styled.div`
  background-color: ${c.white};
  position: relative;
  z-index: 3;
  padding-top: 100px;
  padding-bottom: 100px;
  @media(max-width: 1024px) {
    padding: 0;
  }
`
export const ContainerText = styled.div`
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0;
    text-align: center;
  @media(max-width: 1024px) {
    position:static;
  }
`
export const Title = styled.h2`
  
`
export const ContainerBody = styled.div`
  position: relative;
  display: flex;
  padding-top: 250px;
  padding-bottom: 100px;
  justify-content: center;
  clip-path: url(#clipControlArea);
  @media(max-width: 1024px) {
    clip-path: none;
    padding-top: 0;
    padding-bottom: 0;
    svg {
      display: none;
    }
    flex-direction: column;
  }  
`
export const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  max-width: 650px;
  position: absolute;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  margin: 0 auto;
  overflow: hidden;
  img {
    transform: ${p => p.portal2 ? 'translateY(-80%)' : 'translateY(-100%)'};
    z-index: 1;
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: relative;
    top: 50px;
  }  
  @media(max-width: 1024px) {
    max-width: 100%;
    position: relative;
    left: 0;
    transform: none;
    margin-bottom: 30px;
    img {
      width: 100vw;
      transform: scale(1.1);
      top: 0px;  
    }
  }
`
export const AbsoluteBox = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  width: 650px;
  height: 714px;
  @media(max-width: 1024px) {
    display: none;
  }
`
export const AbsItem = styled.div`
    padding: 0;
    position: absolute;
    transition: 0.15s ease-out;
    border-radius: 3px;
    box-shadow: ${p => p.active ? `0 0px 3px ${c.accentl}, 0 0px 10px ${c.accent}` : 'none'};
`
export const QrCode = styled(AbsItem)`
    width: ${p => p.portal2 ? '75px' : '38px'};
    height: ${p => p.portal2 ? '75px' : '20px'};
    top: ${p => p.portal2 ? '34%' : '31%'};
    right: ${p => p.portal2 ? '7%' : '16%'};
`
export const Lazer = styled(AbsItem)`
    width: ${p => p.portal2 ? '220px' : '195px'};
    height: 28px;
    top: ${p => p.portal2 ? '45.5%' : '37%'};
    right: ${p => p.portal2 ? '33%' : '35%'};
`
export const TwoMonitor = styled(AbsItem)`
    width: ${p => p.portal2 ? '310px' : '373px'};
    height: ${p => p.portal2 ? '190px' : '203px'};
    top: ${p => p.portal2 ? '57%' : '40.5%'};
    right: ${p => p.portal2 ? '25%' : '21.5%'};
`
export const SensorButton = styled(AbsItem)`
    width: ${p => p.portal2 ? '325px' : '204px'};
    height: ${p => p.portal2 ? '54px' : '56px'};
    top: ${p => p.portal2 ? '86%' : '70%'};
    right: ${p => p.portal2 ? '24%' : '34.5%'};
`
export const Camera = styled(AbsItem)`
    width: 92px;
    height: 56px;
    top: ${p => p.portal2 ? '34%' : '28%'};
    right: 43%;
`
export const PayPass = styled(AbsItem)`
    width: ${p => p.portal2 ? '70px' : '54px'};
    height: ${p => p.portal2 ? '85px' : '54px'};
    top: ${p => p.portal2 ? '79%' : '70%'};
    right: ${p => p.portal2 ? '6.2%' : '23.5%'};
`
export const PhotoScan = styled(AbsItem)`
    width: ${p => p.portal2 ? '250px' : '188px'};
    height: ${p => p.portal2 ? '110px' : '81px'};
    top: ${p => p.portal2 ? '95%' : '83%'};
    right: ${p => p.portal2 ? '31%' : '35.5%'};
`
export const CardReader = styled(AbsItem)`
    width: 90px;
    height: 60px;
    top: 70.5%;
    right: 5%
`
export const PinPad = styled(AbsItem)`
    width: 160px;
    height: 90px;
    top: 57%;
    right: 0.5%
`
export const Money = styled(AbsItem)`
    width: 90px;
    height: 35px;
    top: 104%;
    right: 4%
`
export const Phone = styled(AbsItem)`
    width: 110px;
    height: 260px;
    top: 55.5%;
    right: 78%
`
export const Left = styled.div`
  text-align: right;
  margin-right: 650px;
  width: 520px;
  z-index: 2;
  @media(max-width: 1024px) {
    width: 100%;
    padding: 0 15px;
    text-align: center;   
    margin: 0;
  }
`
export const Right = styled.div`
  margin-left: 150px;
  width: 520px;
  z-index: 2;
  > div {
    &:hover {
        cursor: pointer;
        color: ${c.accent};
    }
  }
  @media(max-width: 1024px) {
    width: 100%;
    padding: 0 15px;
    text-align: center;   
    margin: 0;
  }
`
export const Item = styled.div`
  text-transform: uppercase;
  padding: 18px 0;
  margin: 0 auto;
  transition: 0.15s ease-out;
  @media(max-width: 1366px) {
    line-height: 1.4;
  }
`
export const BgColor = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #FFF6F2 0%, rgba(255, 246, 242, 0) 89.93%);
  position: absolute;
  height: 100%;
  max-width: 100% !important;
  top: 0;
  left: 0;
  z-index: 1 !important;
  @media(max-width: 1024px) {
    display: none;
  }
`
