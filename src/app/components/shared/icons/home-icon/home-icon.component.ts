import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-icon',
  standalone: true,
  imports: [],
  templateUrl: './home-icon.component.html',
  styleUrl: './home-icon.component.css',
})
export class HomeIconComponent {
  @Input() isActive: boolean = false;
}
