import { Component } from '@angular/core';
import { Toaster } from './core/services/toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cluster2airports';
  constructor(private toaster:Toaster) {}
  
  showToaster(){
    this.toaster.showSuccess('This is a success message!');
  }
  
}
