import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-chilli-site-replica',
  templateUrl: './chilli-site-replica.component.html',
  styleUrls: ['./chilli-site-replica.component.scss']
})
export class ChilliSiteReplicaComponent implements OnInit {
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
