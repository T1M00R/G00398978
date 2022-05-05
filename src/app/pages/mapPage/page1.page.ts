import { ChangeDetectorRef, Component, ElementRef, getNgModuleById, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GoogleMap, Marker } from '@capacitor/google-maps'
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


    markerId : string;


  // requried to open page
  constructor(private navCtrl:NavController) {}

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.createMap();
  }

  async createMap() {

    try{
      this.newMap = await GoogleMap.create({
      id: 'capacitor-google-maps',
      element: this.mapRef.nativeElement,
      apiKey: environment.google_maps_api_key,
      config: {
        center: this.center,  // can do this since we made it global above
        zoom: 13,
      },
    });


    // call add marker method and add listeners
    this.addMarker(this.center.lat, this.center.lng);
    this.addListeners();  
    }
    catch(e){
      console.log(e);
    };
    
  }




  // Add marker to map
  async addMarker(lat, lng){

    if (this.markerId) this.removeMarker(); // if marker exists, remove last marker
    this.markerId = await this.newMap.addMarker({
      coordinate: {
        lat : lat, 
        lng: lng
      },
      draggable: true
    });
    
  }

  // remove marker method
  async removeMarker(id?) {
    await this.newMap.removeMarker(id ? id : this.markerId);
  }

  // allows for interaction with the markers, by clicking on a marker, the marker id is set if you want to delete it 
  async addListeners(){
    await this.newMap.setOnMarkerClickListener((event) =>{
      console.log("setOnMarkerClickListener",event);
      this.removeMarker(event.markerId);  // remove marker on click
    })
  
  await this.newMap.setOnMapClickListener((event) => {
    console.log("setOnMapClickListener",event);
    this.addMarker(event.latitude, event.longitude);
  })

  await this.newMap.setOnMyLocationButtonClickListener((event) => {
    console.log("setOnMyLocationButtonClickListener",event);
    this.addMarker(event.latitude, event.longitude);
  })

  await this.newMap.setOnMyLocationClickListener((event) => {
    console.log("setOnMyLocationClickListener",event);
    this.addMarker(event.latitude, event.longitude);
  })
  

} // end of addListeners method


  
  

}
