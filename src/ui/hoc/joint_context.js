import React, { useContext, useMemo } from 'react';

export const wrapContextComponent = (componentId, context) => {
  return Component => {
    return ownProps => {
      const ctx = useContext(context);
      const innerProps = {
        [componentId]: ctx,
      };
      return <Component {...ownProps} {...innerProps} />;
    };
  };
};

export const wrapState = (Component, mapProps, components) => {
  const Comp = props => {
    return <Component {...mapProps(props)} />;
  };
  return ownProps => {
    const ResultComponent = useMemo(
      () =>
        components.reduce((acc, WrapComponent) => {
          return WrapComponent(acc);
        }, Comp),
      [],
    );
    return <ResultComponent {...ownProps} />;
  };
};
