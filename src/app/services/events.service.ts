import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Event {
  date: string;
  description: string;
  title: string;
  starttime: string;
  endtime: string;
  cancelled: string;
  isdraft: boolean;
  image: string;
  price: string;
  //TO DO: add other fileds later
}

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private eventsColl: AngularFirestoreCollection<Event>;
  private events: Observable<Event[]>;

  constructor(db: AngularFirestore) {
    this.eventsColl = db.collection<Event>('events', (ref) =>
      ref.orderBy('date')
    ); //TO DO: some condition to be fulfilled, return only events that are now time to future

    this.events = this.eventsColl.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
  getEvents() {
    return this.events;
  }
}
