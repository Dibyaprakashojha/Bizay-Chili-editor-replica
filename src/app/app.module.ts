import { ChilliSiteReplicaComponent } from './chilli-site-replica/chilli-site-replica.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorContainerModule } from "./editor-container/editor-container.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        ChilliSiteReplicaComponent,
        AppComponent
    ],
    providers: [
        {
        provide: LocationStrategy,
        useClass: HashLocationStrategy,
      }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        EditorContainerModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        
    ]
})
export class AppModule { }
