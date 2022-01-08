//* here are our "instructions" - aka the interface - for all of our classes that tells them how they can be used as arguments to our addMarker method below
export interface MapItem {
    location: {
        latitude: number;
        longitude: number;
    };
    markerContent(): string;
    color: string;
}

export class NewMap {
    //* set the googleMap to be private to prevent tampering
    private googleMap: google.maps.Map;
    //* constructor function takes in a divId variable    
    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            //* there are two options we want to use here: the "zoom" and "center" options
            zoom: 4, 
            center: { 
                //* center the map on the United States to start
                lat: 37.0902,
                lng: -95.7129
            }
        });
    }

    //* Marker --> options: { map: what map we want to add marker to, position: where the marker shows up on the map itself --> lat/lng } 
    addMarker(mapItem: MapItem): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mapItem.location.latitude,
                lng: mapItem.location.longitude
            }
        })
        //* create a listener for the marker
        marker.addListener("click", () => {
            //* InfoWindow --> has constructor with InfoWindowOptions --> options: { content: the html or plain string displayed inside of InfoWindow }
            const infoWindow = new google.maps.InfoWindow({
                content: mapItem.markerContent()
            });
            //* InfoWindow also has a method to open. Takes two arguments --> the map, and the marker
            infoWindow.open(this.googleMap, marker);
        })
    }
}