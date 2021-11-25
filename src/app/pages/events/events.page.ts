import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { CalendarMode } from 'ionic2-calendar/calendar';
import { ModalController } from '@ionic/angular';
import { EventDetailsPage }from '../event-details/event-details.page'

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  @ViewChild(CalendarComponent, null) myCal: CalendarComponent;
  
  allEvents = [];
  currentDate = new Date(2021,10,26);
  currentMonth: string = "ss";
  minDate = new Date().toISOString();
  showAddEvent: boolean;
  isToday: boolean;

  calendar = {
    mode: 'month' as CalendarMode,
    currentDate: new Date(2021,10,26),
  };
 
  newEvent = {
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    img:''
  };

  myData = [
    {
      title: 'What is Lorem Ipsum?',
      description: 'What is Lorem Ipsum?',
      startTime: new Date(2021,10,22,12,11,11),
      endTime: new Date(2021,10,22,14,11,11),
      img: 'https://picsum.photos/200'
     },
     {
      title: 'What is Lorem Ipsum?',
      description: 'What is Lorem Ipsum?',
      startTime: new Date(2021,10,22,12,11,11),
      endTime: new Date(2021,10,22,14,11,11),
      img: 'https://picsum.photos/200'
    },
     {
      title: 'What is Lorem Ipsum?',
      description: 'What is Lorem Ipsum?',
      startTime: new Date(2021,10,23,8,11,11),
      endTime: new Date(2021,10,13,9,11,11),
      img: 'https://picsum.photos/200'
    },
    {
      title: 'What is Lorem Ipsum?',
      description: 'What is Lorem Ipsum?',
      startTime: new Date(2021,10,21,2,11,11),
      endTime: new Date(2021,10,21,4,11,11),
      img: 'https://picsum.photos/200'
    },
    {
      title: 'What is Lorem Ipsum?',
      description: 'What is Lorem Ipsum?',
      startTime: new Date(2021,10,20,12,11,11),
      endTime: new Date(2021,10,20,14,11,11),
      img: 'https://picsum.photos/200'
    }
    ] 
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.allEvents = this.myData;    
  }
  onViewTitleChanged(title: string) {
    this.currentMonth = title;
  }

  async onEventSelected(ev) {
    this.newEvent = ev;
    const modal = await this.modalController.create({
      component: EventDetailsPage,
      componentProps: ev
    });
    return await modal.present();
  }

  
  today() {
    this.calendar.currentDate = new Date(2021,10,26);
  }

  changeMode(mode) {
    this.calendar.mode = mode;
  }

  next() {
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }
  
    showHideForm() {
    this.showAddEvent = !this.showAddEvent;
    this.newEvent = {
      title: '',
      description: '',
      img: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString()
    };
    }
  
    addEvent() {
      this.allEvents.push({
        title: this.newEvent.title,
        startTime:  new Date(this.newEvent.startTime),
        endTime: new Date(this.newEvent.endTime),
        description: this.newEvent.description,
        img: this.newEvent.img
      });
      this.showHideForm();
    }

}
