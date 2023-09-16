'use client';

import { useState } from 'react';

const DropDown = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(true);

  return <div onClick={() => setShow((show) => !show)}>{children}</div>;
};

export default DropDown;
