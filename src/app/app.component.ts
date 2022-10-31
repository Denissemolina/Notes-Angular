import { Component } from '@angular/core';
import { Notes } from './notes/notes'

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo: Notes[] = [
    {
      title: 'Buy milk',
      description: 'Go to the store and buy milk'
    },
    {
      title: 'Another example',
      description: 'Using Firebase and Angular'
    }
  ];
}
