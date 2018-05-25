import React from 'react';
//3e621bf55d85afdebaeb853ae3dac54c
//bcb83c4b54aee8418983c2aff3073b3b
class Weather extends React.Component{
  constructor(){
    super();
    this.state = {
      temperature: '',
      location: '',
      apiError: undefined
    };
  }

  componentDidMount(){
    this.makeRequest2().then(data => {
      this.setState({
        temperature: data.main.temp - 273,
        location: data.name
      });
    },() => {
      this.setState({
        apiError: data
      });
    });
  }

  makeRequest2(){
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(function(position){
        var req = new XMLHttpRequest();
        const options = {
          url: `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=bcb83c4b54aee8418983c2aff3073b3b
          `,
          method: "GET",
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          data: {},
          success: (response) => {return JSON.parse(response);},
          error: (error) => {console.log(error);}
        };
        req.open(options.method, options.url, true);
        req.onload = (e) => {
          if (req.status === 200){
            resolve(options.success(req.response));
          }else{
            reject(options.error(req.response));
          }
        };
        req.send(JSON.stringify(options.data));
      });
    });
  }



  render(){
    if (this.state.apiError === undefined)
      return(
        <div>
          <h1>
            {this.state.temperature}
          </h1>
          <h1>
            {this.state.location}
          </h1>
        </div>
      );
  }
}

export default Weather;
