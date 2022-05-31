import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Engine } from '../models/engine.models';
import { EngineService } from '../services/engine.service';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent implements OnInit {

  engines: Engine[] = [];

  constructor(private engineService: EngineService,
    private translateService: TranslateService
    ) {}

  ngOnInit(): void {
    this.engineService.getEnginesFromDb().subscribe(response => {
      for (const key in response) {
        this.engines.push(response[key]);

      }
    })
  }

}
