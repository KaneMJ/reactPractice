import React from 'react';

class StorePicker extends React.Component {
    goToStore() {
        console.log('Going to the store');
    }

    render() {
        return (
            <React.Fragment>
            {/* comment here */}
            <form className="store-selector">
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button onClick={this.goToStore} type="button">Visit Store -></button>
            </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;