export class Logger {
  static Log(str:string,data:any){
    console.log(str);
    console.log(data);
  }

  static Event(eventName:string){
    console.log(eventName);
  }
}
