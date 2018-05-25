import React from 'react';

class Tab extends React.Component {

  constructor(props){
    super(props);
    this.state = {selectedIndex: 0};
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }


  handleClickEvent(e, idx){
    //console.log(idx);
    this.setState({selectedIndex: idx});
  }

  render(){
    return(
      <div className="tabs">
      {
        this.props.options.map((object,idx) => {
        if(idx === this.state.selectedIndex){
          return(
            <div key={idx}>
              <div  className="tab">
                <h1 className = "tab-title" onClick={(e) => { this.handleClickEvent(e, idx);}}>{object.title}</h1>
              </div>
              <div className="tab-content">
                <article>{object.content}</article>
              </div>
            </div>
          );
        }else{
          return(
            <div key={idx} className="tab">
              <h1 className = "tab-title" onClick={(e) => { this.handleClickEvent(e, idx);}}>{object.title}</h1>
            </div>

          );
        }
        })
      }
    </div>
    );
  }
}







export default Tab;
