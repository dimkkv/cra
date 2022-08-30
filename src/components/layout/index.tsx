import React from 'react';
import Aside from './aside';
import Body from './body';
import HeaderWrapper from './header-wrapper';

function ImmunaApp(props): React.FC {
  return (
    <>
      <Body>
        <Aside />
        <HeaderWrapper>{props.children}</HeaderWrapper>
      </Body>
    </>
  );
}

export default ImmunaApp;
