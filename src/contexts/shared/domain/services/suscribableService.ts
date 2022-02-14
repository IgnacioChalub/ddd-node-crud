import Messager from "../../aplication/messagers/messager";

abstract class SuscribableServices{

   private  messager: Messager;

    constructor(messager: Messager) {
        this.messager = messager;
    }

    notify(event: any){
        this.messager.sendMessage(event);
    }

}

export default SuscribableServices;