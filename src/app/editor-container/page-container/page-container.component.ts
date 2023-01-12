import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit {
  editorUrl: any;
  previewUrl: any
  templates: any[] = [];
  pages: any[] = []
  imagePath: any;
  vertical = false;
  constructor() { }
  generatePagePrview() {
    let pages = window["editorObject"].GetNumPages();
    let frontPage :any[]=['Front','Back'];
    for (let i = 0; i < pages; i++) {
      let snapShot = window["editorObject"].GetPageSnapshot(i);
      let imagePath = 'data:image/jpg;base64,'
        + snapShot;
       let Json = {
        "imahePath": imagePath,
        "index": i + 1,
        "page":frontPage[i]
      }
      this.templates.push(Json);
      
    }
  }

  openselectedepage(event: any) {
    window["editorObject"].SetSelectedPage(event)
  }
  ngOnInit(): void {
    this.generatePagePrview();
   
  }

}
