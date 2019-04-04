import { Component } from '@angular/core';
import { takePicture, requestPermissions } from 'nativescript-camera';
import { ImageAsset } from 'tns-core-modules/image-asset';
import { Router } from '@angular/router';
import { TextField } from "tns-core-modules/ui/text-field";
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
    selector: "TakePicture",
    moduleId: module.id,
    templateUrl: "./takePicture.component.html",
    styleUrls: ['./takePicture.component.css']
})

export class TakePicturesComponent {

    constructor(private router: Router,private page: Page) {
        this.page.actionBarHidden = true;
     }

    public sauvegarder: boolean = false;
    public cameraImage: ImageAsset;
    isTaked = false;

    onTakePictureTap(args) {
        if(!this.isTaked){
            requestPermissions().then(
                () => this.capture(),
                () => alert('permissions rejected')
            );
            this.isTaked = true;
        }
    }

    send(){
        if(this.isTaked){
            this.isTaked = false;
            //TODO: Enregistrer la photo dans les datas

            this.router.navigate(["/feed"]);
        }      
    }

    capture() {        
        takePicture({ width: 125, height: 150, keepAspectRatio: true, saveToGallery: this.sauvegarder })
        .then((imageAsset: any) => {
            this.cameraImage = imageAsset;
            imageAsset.getImageAsync(function (nativeImage) {
                let scale = 1;
                let height = 0;
                let width = 0;
                if (imageAsset.android) {
                    // get the current density of the screen (dpi) and divide it by the default one to get the scale
                    scale = nativeImage.getDensity() / imageAsset.android.util.DisplayMetrics.DENSITY_DEFAULT;
                    height = imageAsset.options.height;
                    width = imageAsset.options.width;
                } else {
                    scale = nativeImage.scale;
                    width = nativeImage.size.width * scale;
                    height = nativeImage.size.height * scale;
                }
                console.log(`Displayed Size: ${width}x${height} with scale ${scale}`);
                console.log(`Image Size: ${width / scale}x${height / scale}`);
            });
            this.isTaked = true;
        }, (error) => {
            console.log("Error: " + error);
            this.isTaked = false;
        });
    }          
}
