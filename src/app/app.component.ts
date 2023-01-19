import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GlobalConfig as config } from "./config/config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    console.log("app component" ,window["envConfig"]);
    if (environment.environment !== "local" && window) {
      config.setConfig(window["envConfig"]);
    } else {
      config.setConfig(environment);
    }
  }
  title = 'chilli-editor-app';
}
