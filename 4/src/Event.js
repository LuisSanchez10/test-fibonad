export default class Event{
// implement your code here...
    static filter(events, types){
        if(events && types){
            let data = events.filter(function(e) {
                return types.indexOf(e.type) > -1;
            });
            return data;
        } else {
            if (events){
                return events;
            }else{
                return [];
            }
        }
    }
};