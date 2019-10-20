export default class EventManager{

    constructor(events) {   
        this.allEvents = events; 
    }

    run() {
        // implement your code here...
        console.log("RUNNING");
        let info = this.allEvents;
        var callCount = 0;
        var repeater = setInterval(function () {
        if (callCount < 10) {
            for(var i=0; i < info.length; i++){
                if(info[i].second === callCount){
                    console.log('At second ' + callCount, info[i])
                }
            }
            callCount += 1;
        } else {
            clearInterval(repeater);
        }
        }, 1000);
    }
};