import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-desktop-navigation',
  templateUrl: './desktop-navigation.component.html',
  styleUrls: ['./desktop-navigation.component.scss']
})
export class DesktopNavigationComponent {
  constructor(private router: Router) { }

  get routerLinkActive(): string {
    return this.router.url;
  }
}
