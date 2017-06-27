import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Widget from '../components/widget';

class WeatherList extends Component {
  constructor(props){
    super(props);
    this.renderWeather= this.renderWeather.bind(this);
    }
  renderWeather(cityData,index){
    const temps= _.map(cityData.list.map(weather => weather.main.temp),(temp)=> temp-273);
    const humidity= cityData.list.map(weather=>weather.main.humidity);
    const pressure= cityData.list.map(weather=>weather.main.pressure);
    return(
      <tr key={cityData.city.name}>
        <td>
          <Widget data={this.props.weather.current[index]}/>
        </td>
        <td>
          <Chart data={temps} color="orange"  units="°C"/>
        </td>
        <td>
          <Chart data={pressure} color="blue" units="hPa" />
        </td>
        <td>
          <Chart data={humidity} color="green" units="%" />
        </td>

      </tr>
      )
    }

  render(){
    return(
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>City <br/> <h6>(in India)</h6></th>
            <th>Temperature <br/>
              <h6>  Forecast for next 5 days</h6></th>
            <th>Pressure <br/> <h6>(hPa) </h6></th>
            <th>Humidity<br/> <h6> (%)</h6></th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.forecast.map(this.renderWeather)}

        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state){
  return { weather: state.weather }; //{weather} ==={weather: weather} es6
}

export default connect(mapStateToProps)(WeatherList);
