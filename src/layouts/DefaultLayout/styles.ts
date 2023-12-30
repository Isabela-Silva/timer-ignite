import styled from "styled-components";


export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem); /* só assim pra funcionar o 100% no heigth (isso funciona facilmente no width: 100vw, mas no height não ) além disso teve um calc pra tirar 10rem pro padding*/
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

`;