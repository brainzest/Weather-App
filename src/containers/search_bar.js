import React ,{ Component } from 'react';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather, currentWeather} from '../actions/index';

class SearchBar extends Component{
  constructor(props){

    super(props);

    this.state={term :''};

    this.onInputChange= this.onInputChange.bind(this);
    this.onFormSubmit= this.onFormSubmit.bind(this);

  }

  onInputChange(event){
    this.setState({term:event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    //Make API request
    //http://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1
    //api.openweathermap.org/data/2.5/forecast?q={city name},{country code}

    this.props.fetchWeather(this.state.term);
    this.props.currentWeather(this.state.term);
    this.setState({term:''});
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group input-group-lg">
        <input placeholder="Search for weather in city" className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn search">Submit</button>
        </span>
      </form>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather, currentWeather},dispatch);

}

export default connect(null,mapDispatchToProps)(SearchBar);
