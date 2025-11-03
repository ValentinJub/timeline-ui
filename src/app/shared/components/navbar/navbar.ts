import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DxMenuModule } from 'devextreme-angular';

import { ThemeSelector } from '../theme-selector/theme-selector';
import { ItemClickEvent } from 'devextreme/ui/menu';

@Component({
  selector: 'app-navbar',
  imports: [DxMenuModule, ThemeSelector],
  templateUrl: './navbar.html',
  styles: ``,
})
export class Navbar {
  constructor(private router: Router) {}

  navigateTo(event: ItemClickEvent) {
    console.debug('Menu item clicked:', event);
    const route = event.itemData?.text ?? event.itemData?.icon;
    switch (route) {
      case 'home':
        this.navigateToHome();
        break;
      case 'optionsgear':
        this.navigateToSettings();
        break;
      case 'box':
        this.navigateToSandbox();
        break;
      default:
        console.warn('Unknown route:', route);
    }
  }

  navigateToSandbox() {
    this.router.navigate(['/sandbox']);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToSettings() {
    this.router.navigate(['/settings']);
  }
}
