export interface WeatherData {
    cityName: string;
    categories: string[];
    maxTemp: number[];
    minTemp: number[];
    temp: number[];
}

export interface WeatherToday {
    air_pressure: number;
    applicable_date: string;
    max_temp: number;
    min_temp: number;
    predictability: number;
    visibility: number;
    humidity: number;
    weather_state_abbr: string;
    weather_state_name: string;
    wind_direction_compass: string;
    wind_speed: number;
}

export interface CityData {
    title: string;
    location_type: string;
    woeid: number;
    latt_long: string;
    timezone: string;
}