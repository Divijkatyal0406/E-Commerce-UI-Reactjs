import styled from 'styled-components'

const Container=styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    font-size: 14;
    justify-content: center;
`

const Announcement = () => {
  return (
    <Container>Super Deal!! Free Delivery on orders above 300</Container>
  )
}

export default Announcement;