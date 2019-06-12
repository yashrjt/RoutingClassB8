import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ProfileComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports:[ProfileComponent,FooterComponent]
})
export class SharedModule { }
