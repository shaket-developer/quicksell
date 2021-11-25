import React from 'react';
import logo from '../assets/loading-icon.gif'; // with import
class ShowLoad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingMsg: 'Saving counter value'
        }
    }
    render() {
        const text = this.props.saving ? <p className="text-left"><img src={logo} class="img-xs"/> &nbsp; Saving counter value</p>: <p className="text-left">Auto Saving is ON</p>
        return (
            <>
            {text}
            </>
        )
    }
}

export default ShowLoad;