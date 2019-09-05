import React from 'react';

export default class Accordian extends React.Component{
  static defaultProps = {sections: []};
  state = {
    currentIndex: null
  };

  handleButtonClick = index => {
    if(index === this.state.currentIndex){
      this.setState({
        currentIndex: null
      })
    }else{
      this.setState({
        currentIndex: index
      })
    }
  }

  renderButtons() {
    return this.props.sections.map((section, index) => (
      <li key = {index}>
        <button onClick={() => this.handleButtonClick(index)}>
          {section.title}
        </button>
        <p>{this.state.currentIndex === index ? section.content : ''}</p>
      </li>
    ))
  }

  generateLi(){
    //return arr of items to gen li elems

  }


  render() {

    return (
      <ul>
        {this.renderButtons()}
      </ul>
    )
  }


}