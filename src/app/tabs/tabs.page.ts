import { Component } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  eventCount: any;
  events: Event[];
  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.eventsService.getEvents().subscribe((res) => {
      this.eventCount = res.length > 0 ? res.length : '';
    });
  }
}
