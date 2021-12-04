import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {
  subjects;
  constructor(private _router: Router) { }

  ngOnInit() {
    this.subjects = [

      {
        img: 'assets/english.png',
        name: 'English'
      },
      {
        img: 'assets/chemistry.png',
        name: 'Chemistry'
      },
      {
        img: 'assets/statistics.png',
        name: 'Statistics'
      },
      {
        img: 'assets/maths.png',
        name: 'Mathamatics'
      },
      {
        img: 'assets/physics.png',
        name: 'Physics'
      },
      {
        img: 'assets/social.png',
        name: 'Social Science'
      },
    ];
  }


  goToSubject(id) {
    console.log(id);
    this._router.navigate(['/chapter-list']);
  }

  goBack() {
    this._router.navigate(['/home']);
  }
}
