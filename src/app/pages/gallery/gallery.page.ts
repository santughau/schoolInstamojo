import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  images = ['1001.jfif', '1002.jfif', '1003.jfif', '1004.jfif', '1005.jfif', '1006.jfif', '1007.jfif', '1008.jfif', '1009.jfif', '1010.jfif', '1011.jfif', '1012.jfif', '1013.jfif', '1014.jfif', '1015.jfif', '1016.jfif', '1017.jfif', '1018.jfif', '1019.jfif', '1020.jfif'];
  constructor() { }

  ngOnInit() {
  }

}
