export class Todo{
    id:number=0
    title:string=''
    description:string=''


constructor(values:Object={}){
    Object.assign(this,values);
}
}

// export class Todo{
//     id:number;
//     title:string;
//     description : string;

//     constructor() {
//         this.id=0;
//         this.title = '';
//         this.description = '';
      
//       constructor(values:Object={}){
//         Object.assign(this,values);
//     }

//     }
