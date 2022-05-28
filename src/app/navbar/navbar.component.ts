import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    const language = localStorage.getItem("language");
    if (language) {
      this.useLanguage(language);
    }
  }

useLanguage(language: string): void {
  this.translate.use(language);
  localStorage.setItem("language", language);
}

}
