import { Component, OnInit } from '@angular/core';
import { Event, EventsService } from '../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  events: Event[];
  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.eventsService.getEvents().subscribe((res) => {
      this.events = res;
    });
  }
}
