import { Component, Input } from '@angular/core';
import { Resume } from './resume.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  @Input() highlightedResume!: Resume[];
}
