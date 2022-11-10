import React, { ChangeEvent, ChangeEventHandler, ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components';

const CustomC = styled.div`
   background-color : grey;
  `;

const CustomComponentC = (props: any) => {
  const [isDark, setIsDark] = useState(false);

  type CustomCProps = {
    theme: string
  }

  const CustomC2 = styled(CustomC) <CustomCProps>`
    background-color: ${() => isDark ? 'grey' : '#d3b86e'};
  `;

  type LinkPropsType = {
    className?: string,
    children: ReactNode
  }
  const Link = ({ className, children }: LinkPropsType) => (
    <div className={className}>
      {children}
    </div>
  );

  const StyledLink = styled(Link)`
    color: red;
    background-color: green;
    border: solid 5px yellow;
    border-radius:10px;
  `;

  const Thing = styled.div.attrs(() => ({ tabIndex: 3 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }


  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`

  return (
    <>
      <CustomC theme={'blue'}>
        <button onClick={() => setIsDark(!isDark)}>スタイル切り替え</button>
        <p>StyledComponents</p>
      </CustomC>
      <CustomC2 >
        <p>CustomC2</p>
      </CustomC2>
      <Link className={'CustomComponentC'}>Unstyled, boring Link</Link>
      <br />
      <StyledLink>Styled Link</StyledLink>
      <br/>
      <div>
        <Thing>Hello world!</Thing>
        <Thing>How ya doing?</Thing>
        <Thing className="something">The sun is shining...</Thing>
        <div>Pretty nice day today.</div>
        <Thing>Don't you think?</Thing>
        <div className="something-else">
          <Thing>Splendid.</Thing>
        </div>

      </div>
    </>
  )
}

export default CustomComponentC;