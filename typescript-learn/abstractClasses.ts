// Abstract class
abstract class TakePhoto {
    constructor(
        public cameraMode:string,
        public filter:string
    ){}

    abstract getSepia():void

    getTotalCaptures():number{
        return 100;
    }
} 

// Blueprint

// const takePhoto = new TakePhoto("Test","Filter")
class Instagram extends TakePhoto {

    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode, filter)
    }

    getSepia():void {
        console.log("Log")
    }

    getTotalCaptures(): number {
        return 200
    }
}

const insta  = new Instagram("Test","Filter", 3)

