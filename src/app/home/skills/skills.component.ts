import {Component, Input, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnChanges {

  constructor() { }
  @Input() English: any;

  // TITLE
  public headEnglish: any = { title: 'MY SKILLS', subtitle: 'SKILLS AND TOOLS' };
  public headEspanol: any = { title: 'HABILIDADES', subtitle: 'HABILIDADES Y HERRAMIENTAS' };
  public head: any = this.headEnglish;


  // ENGLISH
  public skill_1: any = [
    [{
      title: 'Go-Language',
      progress: 70
    }],
    [{
      title: 'Php',
      progress: 80
    }],
    [{
      title: 'Java Script',
      progress: 70
    }],
      [{
      title: 'Java',
      progress: 60
    }]
  ];

  public skill_2: any = [

    [{
      title: 'Laravel',
      progress: 85
    }],
    [{
      title: 'VueJS',
      progress: 70
    }],
    [{
      title: 'AngularJs',
      progress: 55
    }],
    [{
      title: 'Springboot',
      progress: 60
    }]
  ];

  public skill_3: any = [

    [{
      title: 'Postgres',
      progress: 85
    }],
    [{
      title: 'Mongodb',
      progress: 70
    }],
    [{
      title: 'MySQL',
      progress: 75
    }]
  ];

  public skillEnglish: any = [
    { title: 'Programming', info: this.skill_1 },
    { title: 'Framework', info: this.skill_2 },
    { title: 'Database', info: this.skill_3 },
  ];
  // END ENGLISH


  // ESPANOL
  public habilidad_1: any = [

    [{
      title : 'HABILIDAD 1',
       progress : 95
      }],
      [{
       title : 'HABILIDAD 2',
        progress : 90
      }]
  ];

  public habilidad_2: any = [

    [{
      title : 'HABILIDAD 1',
       progress : 95
      }],
      [{
       title : 'HABILIDAD 2',
        progress : 90
      }],
      [{
       title : 'HABILIDAD 3',
        progress : 96
      }]
  ];

  public habilidad_3: any = [

    [{
      title : 'HABILIDAD 1',
       progress : 95
      }],
      [{
       title : 'HABILIDAD 2',
        progress : 90
      }],
      [{
       title : 'HABILIDAD 3',
        progress : 96
      }]
  ];


  public skillEspanol: any = [
    { title: 'habilidad 1', info: this.habilidad_1 },
    { title: 'habilidad 2', info: this.habilidad_2 },
    { title: 'habilidad 3', info: this.habilidad_3 },
  ];
  // FIN ESPANOL


  // DEFAULT
  public skills: any = this.skillEnglish;




  ngOnInit() {
  }

  ngOnChanges() {
    if (this.English) {
      this.skills = this.skillEnglish;
      this.head = this.headEnglish;
    } else {
      this.skills = this.skillEspanol;
      this.head = this.headEspanol;
    }
  }


}
