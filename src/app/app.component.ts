import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-14-demo'

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k'
    }
    return value
  }
}
