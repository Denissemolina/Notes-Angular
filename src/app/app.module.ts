import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AngularFireModule } from '@angular/fire';
//import { AngularFirestoreModule } from  '@angular/fire/firestore';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
    // AngularFireModule.initializeApp({
    //   apiKey: "AIzaSyCr_HzzmrBRdzukTIwrDPgk79lHiTtubao",
    //   authDomain: "notes-angular-91b87.firebaseapp.com",
    //   projectId: "notes-angular-91b87",
    //   storageBucket: "notes-angular-91b87.appspot.com",
    //   messagingSenderId: "512790832162",
    //   appId: "1:512790832162:web:c0c635a12086126f3e567b"
    // }),
    // AngularFirestoreModule
    // Import the functions you need from the SDKs you need
// // // import { initializeApp } from "firebase/app";
// // // // TODO: Add SDKs for Firebase products that you want to use
// // // // https://firebase.google.com/docs/web/setup#available-libraries

// // // // Your web app's Firebase configuration
// // // const firebaseConfig = {
// // //   apiKey: "AIzaSyCr_HzzmrBRdzukTIwrDPgk79lHiTtubao",
// // //   authDomain: "notes-angular-91b87.firebaseapp.com",
// // //   projectId: "notes-angular-91b87",
// // //   storageBucket: "notes-angular-91b87.appspot.com",
// // //   messagingSenderId: "512790832162",
// // //   appId: "1:512790832162:web:c0c635a12086126f3e567b"
// // // };

// // // // Initialize Firebase
// // // const app = initializeApp(firebaseConfig);
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
