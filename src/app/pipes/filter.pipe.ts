import { Pipe, PipeTransform } from "@angular/core";

//decorador, sirve para modificar el compartamiento de una clase
  @Pipe({
    name:'filter'
  })

export class FilterPipe implements PipeTransform{
    
    transform(values: string[], arg: string):string[] {
let result:string[]=[];
        for(const value of values){
            if(value.indexOf(arg) > -1){
                result=  [...result,value]
            }
        }
        return result;
    }

}