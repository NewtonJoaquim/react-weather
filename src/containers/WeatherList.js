import React from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends React.Component{
    renderWeather(cityData){
        const name = cityData.city.name;
        const temperatures = cityData.list.map(weather => weather.main.temp)
        const humidity = cityData.list.map(weather => weather.main.humidity)
        const pressure = cityData.list.map(weather => weather.main.pressure)
        const {lon, lat} = cityData.city.coord

        return(
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat}/>
                </td>
                <td>
                    <Chart data={temperatures} color='red' units="K"/>
                </td>
                <td>
                    <Chart data={pressure} color='orange' units="hPa"/>
                </td>
                <td>
                    <Chart data={humidity} color='blue' units="%"/>
                </td>
            </tr>
        );
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state){
    return {weather:state.weather};
}

export default connect(mapStateToProps)(WeatherList);