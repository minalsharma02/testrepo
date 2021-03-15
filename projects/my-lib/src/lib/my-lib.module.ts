import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [MyLibComponent],
  imports: [
    HttpClientModule
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
