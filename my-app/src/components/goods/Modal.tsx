import { TModalProps } from 'models';
import React from 'react';

export function Modal(props: TModalProps) {
  const { isActive, setIsActive, children } = props;

  return (
    <div className={isActive ? 'modal active' : 'modal'} onClick={() => setIsActive(false)}>
      <div
        className={isActive ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__cross" onClick={() => setIsActive(false)}>
          &#215;
        </button>
        {children}
      </div>
    </div>
  );
}
