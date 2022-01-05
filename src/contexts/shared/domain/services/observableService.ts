import IObserver from "../../aplication/observer/observer";

abstract class ObservableService{

    observers: IObserver[];

    protected constructor() {
        this.observers = [];
    }

    addObserver(observer: IObserver){
        this.observers.push(observer);
    }

    notify(event: any){
        for (const observer of this.observers) {
            observer.handle(event);
        }
    }
}

export default ObservableService;