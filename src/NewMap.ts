
export class NewMap {
    private googleMap: google.maps.Map;
    
    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 4, 
            center: { 
                lat: 37.0902,
                lng: -95.7129
            }
        });
    }
}