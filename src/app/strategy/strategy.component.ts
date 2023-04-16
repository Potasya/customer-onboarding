import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent {

  constructor(private router: Router) {
  }

  onOpenAccount(): void {
    this.router.navigate(['/next-steps']);
  }
}
