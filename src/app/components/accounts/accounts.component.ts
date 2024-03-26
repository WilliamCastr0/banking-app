import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
})
export class AccountsComponent {
  constructor(public mytitle: Title) {}

  ngOnInit() {
    console.log(this.mytitle.getTitle());
  }
}
