import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../../components/shared/header/header.component';
import { MenuComponent } from '../../components/shared/menu/menu.component';
@Component({
  selector: 'app-layout-menu',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MenuComponent],
  templateUrl: './layout-menu.component.html',
  styleUrl: './layout-menu.component.css',
})
export class LayoutMenuComponent {}
