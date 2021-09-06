window.navigator.geolocation(
    function(position){
        console.log(`latitude: ${position.coords.latitude}`);
        console.log(`longtude: ${position.coords.latitude}`);
    }
)