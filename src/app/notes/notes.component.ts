import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Notes } from './notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  @Input() notes: Notes | null = null;
  @Output() edit = new EventEmitter<Notes>();
}
