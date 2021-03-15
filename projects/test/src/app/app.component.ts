import { Component } from '@angular/core';
import { MyLibModule } from './../../../my-lib/src/lib/my-lib.module';
import { MyLibComponent } from './../../../my-lib/src/lib/my-lib.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
}
