import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-aufgaben',
  templateUrl: './aufgaben.component.html',
  styleUrls: ['./aufgaben.component.css'],
  providers: [AngularFireDatabase]
})
export class AufgabenComponent implements OnInit {

  items: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
  }

  deleteItem(key: string) {
    this.items.remove(key);
  }

  saveItem(titel: string): void {
    this.items.push({ titel, completed: false });
  }

  ngOnInit() {
  }

}
