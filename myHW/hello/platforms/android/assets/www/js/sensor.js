 // The watch id references the current `watchAcceleration`
    var watchID = null;
    var x =0;
    var y =0;
    var z =0;
    var nbFlex =0;


    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        startWatch();
            alert("toto");

    }

    // Start watching the acceleration
    //
    function startWatch() {

        var options = { frequency: 500 };

        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }

    // Stop watching the acceleration
    //
    function stopWatch() {
        if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;
        }
    }

    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {

        var valueChanged = false;

        if (Math.abs(x - Math.round(acceleration.x*10)/10) > 0.2){
            x = Math.round(acceleration.x*10)/10;
        }
        if (Math.abs(y - Math.round(acceleration.y*10)/10) > 0.2){
            y = Math.round(acceleration.y*10)/10;
        }
        if (Math.abs(z - Math.round(acceleration.z*10)/10) > 0.2){
            z = Math.round(acceleration.z*10)/10 - 9.8;
            valueChanged = true;
        }

        if(valueChanged) {
            nbFlex += y;
           $("#nb").append(nbFlex);
            console.log(x +" - \t\t"+y+" - \t\t"+z+" - \t\t"+nbFlex);
        }
    }

    // onError: Failed to get the acceleration
    //
    function onError() {
        alert('onError!');
    }