import { Component } from "@angular/core";



@Component({
    selector:"app-contador",
    templateUrl:"./contar.component.html",
    styleUrls:["./contar.component.css"]
    
})
export class ContarComponent{
    count:number = 0;

    add(){
        this.count++;
    }

    dec(){

        if (this.count >0) {
            this.count --;
        }
        
    }
    


}