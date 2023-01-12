import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-bizay-site-replica',
  templateUrl: './bizay-site-replica.component.html',
  styleUrls: ['./bizay-site-replica.component.scss']
})
export class BizaySiteReplicaComponent implements OnInit {
  messageFromIframe:string = "nothing";
  constructor(private renderer: Renderer2) { 
    // this.renderer.listen('window','myEvent',(e:Event)=>{
    //     // this.isMenuOpen=false;
    //     this.handleEvent(e);
    // });
    // window.document.addEventListener('myEvent', this.handleEvent, false);
  }
  ngOnInit(): void {
  
  }
  // handleEvent(e:any) {
  //   console.log(e.detail.body);
  //   this.messageFromIframe = e.detail.body;
  //   console.log(this.messageFromIframe);
  //   document.getElementById("myInput").innerHTML = e.detail.body;
  // }
}
