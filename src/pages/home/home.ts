import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraOptions, Camera } from '@ionic-native/camera';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, private camera : Camera) {

    }

    private options : CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
    }

    private image;

    hacerFoto() {
        this.camera.getPicture(this.options).then((imageData) => {
            this.image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {

        });
    }
}