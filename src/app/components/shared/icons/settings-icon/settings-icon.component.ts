import { Component, Input } from '@angular/core';

@Component({
  selector: 'settings-icon',
  standalone: true,
  imports: [],
  templateUrl: './settings-icon.component.html',
  styleUrl: './settings-icon.component.css',
})
export class SettingsIconComponent {
  @Input() isActive: boolean = false;
}
