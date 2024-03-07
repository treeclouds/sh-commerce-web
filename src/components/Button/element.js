import styled from "styled-components";

export const WrapperButton = styled.div`
  padding: 12px 24px;
  background-color: ${(props) => props.color};
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  width: ${(props) => props.width};

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;

  &:hover {
    background-color: #0056b3;
  }
`;
