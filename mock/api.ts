import * as TypeMoq from "typemoq";
console.log('Running webapp with API-Mock.');

class TheApi {
   public fetch(path:string):string { return ''; }
   public open(tablename:string, guid:string):void {}
}

//Instantiate The API
const theapi = TypeMoq.Mock.ofType(TheApi);

//Setup Behaviour of TheAPI
theapi.setup(x => x.fetch("/ping")).returns((s: string) => 'pong');

//Export an instance of TheAPI 
export const api = theapi.object;