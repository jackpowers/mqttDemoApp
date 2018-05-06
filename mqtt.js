





var mqtt = require('mqtt')

const { exec } = require('child_process');

var temp;

function mqttConnect() {

    var client = mqtt.connect('mqtt://test.mosquitto.org')

    temp = document.getElementById('myNumber').value.toString();

    client.on('connect', function () {
        
        client.subscribe('temp/random')
        client.publish('temp/random', temp)
      })

    client.on('message', function (topic, message) {

        // message is Buffer
        console.log(message.toString())
        document.getElementById('pub_data_display').value = 
        document.getElementById('pub_data_display').value + '\r\n' + message;
        
    })

}

function mqttTest(){
    if (document.getElementById('pub_data_display').value.includes(temp)){
        document.getElementById('result').innerHTML = "Test Passed!"
    }else{
        document.getElementById('result').innerHTML = "Test Failed!"
    }
}


