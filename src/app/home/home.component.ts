import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
