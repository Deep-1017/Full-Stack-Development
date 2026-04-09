let trafficLight = 'red'
let pedestrianCrossing = false

if(trafficLight == 'green') {
    if(!pedestrianCrossing) {
        console.log('Go straight!');
    }
    else {
        console.log('Wait for the pedestrian to cross.');
    }
}
else if(trafficLight == 'yellow') {
    console.log('Slow down!');
}
else {
    console.log('Stop');
}