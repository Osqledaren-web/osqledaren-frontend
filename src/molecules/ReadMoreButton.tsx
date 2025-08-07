import typedStyled from '../styles/styled';

export const ReadMoreButton = typedStyled.button`
  background: ${({ theme }) => theme.colors.black};
  margin-top: 32px;
  color: white;
  font-family: Avenir, Arial, Helvetica, sans-serif;
  cursor: pointer;
  padding: 5px;
  width: 160px;
  max-width: 35vw;
  height: 3vw;
  border-width: 0px;
  font-size: 1vw;
  text-transform: uppercase;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
  hyphens: auto;
  font-weight: bold;
  :hover {
    -moz-transition: scale 0.35s;
    -ms-transition: scale 0.35s;
    -o-transition: scale 0.35s;
    -webkit-transition: scale 0.35s;
    transition: scale 0.35s;
    scale: 1.08;
    overflow: hidden;
  }
  letter-spacing: 1px;
  line-height: 12px;
  word-break: break-all;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    height: 4vw;
    font-size: 1vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    font-size: 3vw;
    height: 9vw;
  }
`;
