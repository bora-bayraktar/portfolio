import React from 'react';

export default function TabContent({ children, value }) {
  const childrenWithProps = children.map((child, index) =>
    React.cloneElement(child, { active: value === index })
  );

  return <React.Fragment>{childrenWithProps}</React.Fragment>;
}
