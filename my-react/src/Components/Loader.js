import React, { Component } from 'react';

class Loader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {res} = this.props
        
        return (
            
           <div className='loader'>

                {res =='False' ? (<div class="alert alert-danger" role="alert">
            Oops! Movies not found!
</div>): ( <div className="progress">
                <div className="indeterminate"></div>
           </div>)}

          
           
           
           </div >
                
        );
    }
}

export default Loader;