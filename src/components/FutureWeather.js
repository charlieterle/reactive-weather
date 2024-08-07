import React from 'react'
import Column from 'react-bootstrap/Column'
import Row from 'react-bootstrap/Row'

export default function FutureWeather({ weatherData, celFar }) {
    const forecastData = weatherData.forecast.forecastday;
    const forecastCards = [];
    for (const forecastDay of forecastData) {
        // Create a forecastCard with this data
        const date = forecastDay.date;
        const maxTemp = celFar === "C" ? forecastDay.day.maxtemp_c : forecastDay.day.maxtemp_f;
        const minTemp = celFar === "C" ? forecastDay.day.mintemp_c : forecastDay.day.mintemp_f;
        const willItRain = forecastDay.day.daily_will_it_rain;
        const chanceOfRain = forecastDay.day.daily_chance_of_rain;
        const key = "forecastCard-" + date;
    }

    return (
        <Row>
            {forecastCards}
        </Row>
    )
}