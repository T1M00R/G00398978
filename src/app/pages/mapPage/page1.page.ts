import { ChangeDetectorRef, Component, ElementRef, getNgModuleById, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GoogleMap } from '@capacitor/google-maps'
import { environment } from 'src/environments/environment';
// import { create } from 'domain';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  today : number = Date.now();

    // for google map use
    @ViewChild('map')
    mapRef: ElementRef<HTMLElement>;
    newMap: GoogleMap;

    // how the map will look
    center: any = {
      lat: 53.2839577,  // coordinates for G-town
      lng: -9.0837658,
    }

  // requried to open page
  constructor(private navCtrl:NavController) {}

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.createMap();
  }

  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'capacitor-google-maps',
      element: this.mapRef.nativeElement,
      apiKey: environment.google_maps_api_key,
      config: {
        center: this.center,  // can do this since we made it global above
        zoom: 13,
      },
    });
  }

  

  


  
  

}
