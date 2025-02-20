
    const getlocation = () => {
        navigator.geolocation.watchPosition(async(pos) => {
            var lat = pos.coords.latitude;
            var long = pos.coords.longitude;
            const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long;
            const response = await fetch(url);
            const data = await response.json();
            
            console.log(data);
        });
    }
