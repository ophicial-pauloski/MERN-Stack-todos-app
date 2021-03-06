import React from 'react'

export const PopOverMenu = () => {
  return (
    <>
      <Button ref={target} onClick={() => setShow(!show)}>
        Click me!
      </Button>
      <Overlay target={target.current} show={show} placement='right'>
        {props => (
          <Tooltip id='overlay-example' {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}
