
class Ws {

    constructor(addr, room) {
        this.ws = new WebSocket('ws://' + addr + '?room=' + room);
        this.eventList = new Map();

        this.ws.addEventListener('message', (e) => {
            let wsMsg =  JSON.parse(e.data);

            let func = this.eventList.get(wsMsg.event);

            if (func !== undefined){
                func(this, wsMsg.data);
            }
        });

        this.ws.addEventListener('open', (e) => {
            
            let func = this.eventList.get('open');

            if (func !== undefined){
                func(this, {});
            }
        });

        window.onunload = ()=>{
            this.ws.close();
        };
    }

    
    on(event, callback){
        this.eventList.set(event, callback);
    }

    send(event, data){
        let wsMsg = {event , data};
        this.ws.send(JSON.stringify(wsMsg));
    }

    close(){
        this.ws.close();
    }
}



export {Ws}
