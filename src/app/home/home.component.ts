import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { selectCount } from '../states/counter/counter.selector';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../states/counter/counter.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select(selectCount);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
