import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  isCurrentRoute(route: string): boolean {
    return this.router.url === route;
  }
}
