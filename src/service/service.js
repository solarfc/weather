const _apiBase = `https://api.openweathermap.org/data/2.5/`;
const _appid = `&appid=b8d83f4dee79d550cdf1513b6258ce5f&units=metric`;

const getRecourse = async (path) => {
    const res = await fetch(`${_apiBase}${path}${_appid}`);

    if(!res.ok) {
        throw new Error(`received ${res.status}\``)
    }
    return await res.json();
};

export const getCurrentWeatherData = async (path) => {
    const res = await getRecourse(path);
    return res;
};

export const getForecastWeatherData = async (path) => {
    const res = await getRecourse(path);
    return res;
};