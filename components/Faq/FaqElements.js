import styled from "styled-components";

export const FaqContainer = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 100%;
  max-width: 80%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: bottom;
  border-bottom: 1px solid white;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: left;
    justify-content: center;
    padding: 0 10px;
    max-width: 90%;
  }
`;

export const FaqHeader = styled.div`
  font-family: 'DM Sans', sans-serif; 
  color: green;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 1rem;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const AccordionSection = styled.div`
 transition: all 0.3s ease-out;
`;

export const Wrap = styled.div`
  background: green;
  padding: 1rem;
  color: yellow;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  /* padding-bottom: 1rem; */
  /* border-radius: 5px; */
  /* border-bottom: 0.5rem black solid; */

  :hover {
    background: none;
    /* transition: all 0.3s ease-out; */
    cursor: pointer;
  }
`;

export const Dropdown = styled.div`
  transition: all ease-in-out 5s;
  font-family: 'DM Sans', sans-serif; 
  color: black;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5rem;
  background: white;
  border: 1px solid green;
  margin-bottom: 1rem;
`;
