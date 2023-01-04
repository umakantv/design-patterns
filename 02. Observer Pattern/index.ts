import { CurrentStateDisplay } from "./CurrentStateDisplay";
import { StatsDisplay } from "./StatsDisplay";
import { WeatherData } from "./WeatherData";


const weatherData = new WeatherData();

const currentStateDisplay = new CurrentStateDisplay();
const statsDisplay = new StatsDisplay();

weatherData.registerObserver(currentStateDisplay);
weatherData.registerObserver(statsDisplay);

weatherData.setState({
    temperature: 72,
    humidity: 60,
    pressure: 1.4,
});

console.log('===================')

weatherData.setState({
    temperature: 74,
    humidity: 64,
    pressure: 1.3,
});


console.log('===================')

weatherData.removeObserver(currentStateDisplay);

weatherData.setState({
    temperature: 67,
    humidity: 62,
    pressure: 1.2,
});
