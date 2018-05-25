import React from 'react';

const dayConverter = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
};

const monthConverter = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sept",
  9: "Oct",
  10: "Nov",
  11: "Dec"
};

class Clock extends React.Component{

  componentDidMount(){
    this.handle = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.handle);
  }

  constructor(){
    super();
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
  }
  tick(){
    this.setState({time: new Date()});
  }


  render(){
    let minutes = this.state.time.getMinutes();
    let hours = this.state.time.getHours();
    let seconds = this.state.time.getSeconds();
    let date = this.state.time.getDate();
    let day = this.state.time.getDay();
    let year = this.state.time.getFullYear();
    let month = this.state.time.getMonth();
    [minutes, hours, seconds] = [minutes, hours, seconds].map(time => {
      if(time < 10){
        return "0" + time;
      }else{
        return time;
      }
    });
    return(
    <div>
      <h1 className="header"> Clock </h1>
      <div className="inner-clock">
        <h1>Time: </h1>
        <h1> {hours}:{minutes}:{seconds} PDT  </h1>
      </div>
      <div className="inner-clock">
        <h1 className="date">Date: </h1>
        <h1>{dayConverter[day]} {monthConverter[month]} {date} {year}  </h1>
      </div>
    </div>
    );
  }

}





export default Clock;
