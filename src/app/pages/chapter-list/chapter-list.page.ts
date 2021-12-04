import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.page.html',
  styleUrls: ['./chapter-list.page.scss'],
})
export class ChapterListPage implements OnInit {
  title;
  chapters;
  segId = 'Chapters';
  constructor(private _router: Router) { }

  ngOnInit() {
    this.chapters = [
      {
        img: 'assets/light.jpg',
        name: 'Theory of Light',
        per: 90
      },
      {
        img: 'assets/water.jpg',
        name: 'Theory of Water',
        per: 40
      },
      {
        img: 'assets/motion.jpg',
        name: 'Theory of Motion',
        per: 50
      },
      {
        img: 'assets/sound.jpg',
        name: 'Theory of Sound',
        per: 65
      },
      {
        img: 'assets/sky.jpg',
        name: 'Theory of Sky',
        per: 75
      },
      {
        img: 'assets/energy.jpg',
        name: 'Theory of Energy',
        per: 45
      },
    ];
  }


  goBack() {
    this._router.navigate(['/subject']);
  }

  goToQuiz() {
    console.log("quiz");
    this._router.navigate(['/quiz']);
  }

}
