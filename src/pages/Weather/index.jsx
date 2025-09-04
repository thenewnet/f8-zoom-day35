import { useState } from 'react';

import styles from './Weather.module.scss';

function Weather() {
    const [city, setCity] = useState({});

    const weatherData = {
        "hanoi": { id: "hanoi", city: "Hà Nội", temp: 28, weather: "Nắng", humidity: 65, icon: "☀️" },
        "hcm": { id: "hcm", city: "TP.HCM", temp: 32, weather: "Có mây", humidity: 78, icon: "🌤️" },
        "danang": { id: "danang", city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ", humidity: 82, icon: "🌧️" }
    };

    const handleOnChange = (city) => {
        if(city === "-") return;
        
        setCity(weatherData[city]);
    }

    const handleOnRefresh = () => {
        if (!city.id) return;
        const newData = { ...city, temp: getRandom(city.temp), humidity: getRandom(city.humidity) };
        setCity(newData);
        getRandom();
    }
    const getRandom = (value) => {
        const max = value + 5;
        const min = value - 5;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return (
        <>

            <div className={styles.control}>
                <select value={city.id} onChange={(e) => handleOnChange(e.target.value)}>
                    <option value="-">Vui lòng chọn thành phố</option>
                    <option value="hanoi">Hà Nội</option>
                    <option value="hcm">TP.HCM</option>
                    <option value="danang">Đà Nẵng</option>
                </select>
                <button onClick={handleOnRefresh}>Làm mới</button>
            </div>

            <div className={styles.card}>
                <div className={styles.row}>
                    <div className={styles.left}>Tên thành phố:</div>
                    <div className={styles.right}>{city.city}</div>
                </div>

                <div className={styles.row}>
                    <div className={styles.left}>Nhiệt độ (°C):</div>
                    <div className={styles.right}>{city.temp}</div>
                </div>

                <div className={styles.row}>
                    <div className={styles.left}>Tình trạng thời tiết:</div>
                    <div className={styles.right}>{city.weather} {city.icon}</div>
                </div>

                <div className={styles.row}>
                    <div className={styles.left}>Độ ẩm (%):</div>
                    <div className={styles.right}>{city.humidity}</div>
                </div>
            </div>



        </>

    );
}

export default Weather;