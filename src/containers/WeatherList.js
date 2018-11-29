import React from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends React.Component{
    renderWeather(cityData){
        const name = cityData.city.name;
        const temperatures = cityData.list.map(weather => weather.main.temp)
        const humidity = cityData.list.map(weather => weather.main.humidity)
        const pressure = cityData.list.map(weather => weather.main.pressure)

        return(
            <tr key={name}>
                <td>
                    {name}
                </td>
                <td>
                    <Chart data={temperatures} color='red'/>
                </td>
                <td>
                    <Chart data={humidity} color='orange'/>
                </td>
                <td>
                    <Chart data={pressure} color='blue'/>
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
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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