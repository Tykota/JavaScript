import { Component } from '@angular/core';
import {Howl} from 'howler';
import {NavController} from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mp3player';
  currentSong = 1;

  sound = new Howl({
    src: ['assets/1.mp3']
  });

     playSong() {
       this.sound.play();
     }

  pauseSong() {
    this.sound.pause();
  }

  editTheText(x){
       let printMe;
       switch (x) {
         case 1: printMe = '8 bit dungeon boss';
                 break;
         case 2: printMe = 'At Launch';
                 break;
         case 3: printMe = 'Autumn Day';
                 break;
         case 4: printMe = 'Artifact';
                 break;
         case 5: printMe = 'Ascending the Vale';
                 break;
         case 6: printMe = 'baby yaga';
                 break;
         case 7: printMe = 'Bent And Broken';
                 break;
         case 8: printMe = 'Bit Shift';
                 break;
         default:
           break;
       }
       document.getElementById('songTitle').innerText = printMe;
     }


  changeSong(s: string) {
    this.sound.stop();
    this.sound = new Howl({
      src: 'assets/' + s + '.mp3'
    });
    this.currentSong = parseInt(s, 10);
    this.editTheText(this.currentSong);
    this.sound.play();
  }

  nextSong() {
    this.sound.pause();
    this.sound = new Howl({
      src: 'assets/' + this.currentSong.toString() + '.mp3'
    });
    this.currentSong = (this.currentSong) % 8 + 1;
    this.editTheText(this.currentSong);
    this.sound.play();
  }
}
export class WelcomePage{

  constructor(public navCtrl: NavController){
    const sound = new Howl({
      src: ['http://server8.mp3quran.net/ahmad_huth/001.mp3'],
      html5: true
    });
    sound.play();
  }
}
