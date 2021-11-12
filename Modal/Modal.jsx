import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../Portal/Portal';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

import './Modal.scss';

const Modal = ({
                   title,
                   isOpen,
                   onCancel,
                   onSubmit,
                   children,
               }) => {

    return (
        <>
            {isOpen &&
            <Portal>
                <div className="modalWindow">
                    <div className="modalContent">
                        <div className="modalHeader">
                            <div className="modalTitle">{title}</div>
                            <Button
                                className="modalClose"
                                onClick={onCancel}
                                transparent round>
                                <Icon
                                    name="close_alt"
                                    color="blue"/>
                            </Button>
                        </div>
                        <div className="modalBody">
                            {children}
                        </div>
                        <div className="modalFooter">
                            <Button onClick={onCancel} outline>Cancel</Button>
                            <Button onClick={onSubmit}>Submit</Button>
                        </div>
                    </div>
                </div>
            </Portal>
            }
        </>
    );
};

Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node,
};

Modal.defaultProps = {
    title: 'Modal title',
    isOpen: false,
    onCancel: () => {},
    onSubmit: () => {},
    children: null,
};

export default Modal;