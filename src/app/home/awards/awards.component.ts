import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() English: any;

  public headEnglish: any = { title: 'COURSE', subtitle: '' };

  public head: any = this.headEnglish;




  public awardsEnglish: any = [

    {
      title: 'Devnet Associate',
      name: 'Cisco',
      date: 'February 2024 - march 2024',
      desc: 'DevNet Associate training teaches participants the best practices of  modern software development practices and DevOps, to understand and learn how to use APIs safely, and how to automate operations network using API'
    },
    {
      title: 'Scalable Web Service with Golang',
      name: 'Hacktiv8 Indonesia',
      date: 'Februari 2023 - April 2023',
      desc: 'Exploration of Various Functional Aplication, Understand teh main core of the go programming language,\n' +
        'Understand the Go to Human - Readable Error Handling Approach, Understand the Key Concepts of\n' +
        'Microservices, and Understand how Go-Routines and Channels Work.'
    },
    {
      title: 'UI/UX Design Mastery',
      name: 'Skilvul',
      date: '22 Agustus 2022 - Oktober 2022',
      desc: 'Fundamental UIUX and learn to Userflow, wireframe, UI Desigh Prosess and Element of UX Design.'
    },
    {
      title: 'Bootcamp Fullstack WEB Developer',
      name: 'Gamelab.id',
      date: 'June 2022 - Oktober 2022\n',
      desc: 'Basics of HTML CSS, PHP, Learn basic query language then work on the final project using the Laravel framework and VueJs as the frontend.'
    },
  ];



  public awards: any = this.awardsEnglish;

  ngOnInit() {
  }



  ngOnChanges() {
    if (this.English) {
      this.awards = this.awardsEnglish;
      this.head = this.headEnglish;
    } else {

    }
  }

}
