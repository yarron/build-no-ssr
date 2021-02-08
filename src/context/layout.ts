/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const LayoutContext = React.createContext<Partial<any>>({
  fullScreen: false,
  setFullScreen: undefined,
  open: false,
  setOpen: undefined,
});

export default LayoutContext;
