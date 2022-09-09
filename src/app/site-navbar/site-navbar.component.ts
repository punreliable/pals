import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-site-navbar',
  templateUrl: './site-navbar.component.html',
  styleUrls: ['./site-navbar.component.scss']
})
export class SiteNavbarComponent implements OnInit {

  @Input()
  title: string = 'Pals';

  constructor() { }

  ngOnInit(): void {
  }

}
