import React, {Component, Fragment} from 'react';
import Modal from './Modal';
import Button from '../Button/Button';

class Sandbox extends Component {
    state = {
        isOpen: false,
    };

    openModal = () => {
        this.setState({isOpen: true});
        document.body.style.overflow = 'hidden';
    };

    handleSubmit = () => {
        console.log('Submit function!');
        this.setState({isOpen: false});
        document.body.style.overflow = '';
    };

    handleCancel = () => {
        console.log('Cancel function!');
        this.setState({isOpen: false});
        document.body.style.overflow = '';
    };

    render() {
        return (
            <Fragment>
                <h3 className="mt-5">Modal</h3>
                <h5><span>1. Base Dialog (Modal) window:</span></h5>
                <Button onClick={this.openModal}>Show modal</Button>
                <Modal
                    title="Test Dialog window"
                    isOpen={this.state.isOpen}
                    onCancel={this.handleCancel}
                    onSubmit={this.handleSubmit}
                >
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a</p>
                </Modal>
            </Fragment>
        );
    }
}

export default Sandbox;
