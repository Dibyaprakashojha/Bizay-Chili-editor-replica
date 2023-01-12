import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GlobalConfig as config } from "../config/config";


@Injectable({
  providedIn: "root",
})
export class ApplicationService {
  private filteringData: any;

  constructor(private http: HttpClient
   ) { }

  public setFilteringData(formData: any) {
    this.filteringData = formData;
  }

  public getFilterData() {
    return this.filteringData;
  }

  /** Application utils */

  isNullOrEmpty(value: string) {
    return !(value && value !== null && value !== "");
  }

 
  public getCHILIAPIKey(): Observable<any> {
    const url =
      config.getServiceBaseURI() +
      "/apiKey?roleName=" +"Admin"
      ;
    return new Observable((oApiKey) => {
      this.http.post(url, {}).subscribe((response) => {
        oApiKey.next(response);
      });
    });
  }

  uploadFiles(file: any) {
    const formdata: FormData = new FormData();  
    formdata.append('file', file); 
    const url = config.getServiceBaseURI()+"/uploadImage";
    return new Observable((oDocumentTypeResponse) => {
      this.http.post(url, formdata).subscribe({
        next: (response) => {
          oDocumentTypeResponse.next(response);
          oDocumentTypeResponse.complete();
        },
        error: (error) => {
          oDocumentTypeResponse.error(error);
          oDocumentTypeResponse.complete();
        },
      });
    });
  } 

}
