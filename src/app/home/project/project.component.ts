import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {Internship} from "../../models/internship";


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnChanges {
  @Input() English: any;

  public jobs: any = [];
  jobsEnglish: Internship[];


  public headEnglish: any = { title: 'PROJECT PORTOFOLIO', subtitle: 'Educa Studio Marketplace' };
  public escoresheet: any = { title: 'E-Scoresheet', subtitle: 'Educa Studio Marketplace' };
  public head: any = this.headEnglish;

  constructor() {

    const job_1: Internship = new Internship('Committee', 'March-2022',
      '<P>International Conference on SDGs .</p>'
     , 1);


    const job_2: Internship = new Internship('KPPS (Commite)', 'December-2019',
      '<P>Komisi Pemilihan Umum Kabupaten Semarang</p>', 1);

    const job_3: Internship = new Internship('Internship Trainee', 'January -2019',
      '<P>Fakutas Teknonologi Pertanian Universitas Semarang •</p>', 1);


    this.jobsEnglish = [job_1,job_2,job_3];

    this.jobs = this.jobsEnglish;
  }



  ngOnInit() {
  }


  ngOnChanges() {
    if (this.English) {
      this.head = this.headEnglish;
      this.jobs = this.jobsEnglish;
    } else {

    }
  }

}
