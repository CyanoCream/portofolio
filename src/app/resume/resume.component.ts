import { Component, Input } from '@angular/core';
import { Resume } from './resume.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  @Input() highlightedResume: Resume[] = [];

  timelineItems: Resume[] = [
    new Resume('1', 'Committee', 'March 2022', 'International Conference on SDGs'),
    new Resume('2', 'KPPS (Committee)', 'December 2019', 'Komisi Pemilihan Umum Kabupaten Semarang'),
    new Resume('3', 'Internship Trainee', 'January 2019', 'FTP Universitas Semarang')
  ];
  educationItems: Resume[] = [
    new Resume('1', 'SMK N1 Ungaran', '2016', '-'),
    new Resume('2', 'Universitas Semarang', '2021', 'S1-Sistem Informasi'),
  ];
}
