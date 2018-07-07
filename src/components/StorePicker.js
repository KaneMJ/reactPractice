import React from 'react';

class StorePicker extends React.Component {
    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
        console.log('Gonna create a component');
    }
    
    myInput = React.createRef();

    goToStore(event) {
        // Stop form from submitting
        event.preventDefault();
        // Grab the text from the input using the ref we created above
        const storeName = this.myInput.value.value;
        // Change the page to the store entered
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <React.Fragment>
            {/* comment here */}
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>
                <input ref={this.myInput} type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store -></button>
            </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;