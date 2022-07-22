import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'

const Container=styled.div`
    width: 100%;
    height:100vh;
    display: flex;
    background-color: coral;
    position: relative;
`

const Arrow=styled.div`
    width:50px;
    height: 50px;
    border-radius: 50%;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
`

const Slider = () => {
  return (
    <Container>
        <Arrow>
            <ArrowLeftOutlined />
        </Arrow>
        <Arrow>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider