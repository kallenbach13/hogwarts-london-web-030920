import React, { Component } from 'react' 
import Hog from './Hog'

class HogList extends Component {

displayHogs = () => {
    return this.props.hogs.map(hog => <Hog hog={hog} showDetail={this.props.showDetail} renderWithoutHidden={this.props.renderWithoutHidden} />)
}
    

render () {
    return <div className="ui grid container" > {this.displayHogs()}  </div>
}

}

export default HogList