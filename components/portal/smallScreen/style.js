import styled from 'styled-components'
import c from '../../../styled/color'

export const Container = styled.div`
  background-color: ${c.white};
  position: relative;
  z-index: 3;
  padding-top: 100px;
  padding-bottom: 100px;
`
export const ContainerText = styled.div`
    width: 100%;
    position: absolute;
    top: 100px;
    left: 0;
    text-align: center;
`
export const Title = styled.h2`
  
`
export const ExtraTitle = styled.p`
  
`
export const ContainerBody = styled.div`
  position: relative;
  display: flex;
  padding-top: 250px;
  padding-bottom: 100px;
  justify-content: center;
  clip-path: url(#clipControlArea);
        
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
    transform: translateY(-100%);
    z-index: 1;
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: relative;
    top: 50px;
  }  
`
export const AbsoluteBox = styled.div`
    position: relative;
    z-index: 2;
    height: 100%;
    width: 650px;
    height: 714px;
`
export const AbsItem = styled.div`
    padding: 0;
    position: absolute;
    transition: 0.15s ease-out;
    border-radius: 3px;
    box-shadow: ${p => p.active ? `0 0px 3px ${c.accentl}, 0 0px 10px ${c.accent}` : 'none'};
`
export const QrCode = styled(AbsItem)`
    width: 38px;
    height: 20px;
    top: 31%;
    right: 16%;
`
export const Lazer = styled(AbsItem)`
    width: 195px;
    height: 28px;
    top: 37%;
    right: 35%;
`
export const TwoMonitor = styled(AbsItem)`
    width: 373px;
    height: 203px;
    top: 40.5%;
    right: 21.5%;
`
export const SensorButton = styled(AbsItem)`
    width: 204px;
    height: 56px;
    top: 70%;
    right: 34.5%;
`
export const Camera = styled(AbsItem)`
    width: 92px;
    height: 56px;
    top: 28%;
    right: 43%;
`
export const PayPass = styled(AbsItem)`
    width: 54px;
    height: 54px;
    top: 70%;
    right: 23.5%;
`
export const PhotoScan = styled(AbsItem)`
    width: 188px;
    height: 81px;
    top: 83%;
    right: 35.5%;
`
export const Left = styled.div`
  text-align: right;
  margin-right: 650px;
  width: 520px;
  z-index: 2;
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
`
export const Item = styled.div`
  text-transform: uppercase;
  padding: 18px 0;
  margin: 0 auto;
  transition: 0.15s ease-out;
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
`
