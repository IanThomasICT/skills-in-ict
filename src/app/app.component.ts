import { Component } from '@angular/core';
import { StatusService } from './shared/status.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'skills-in-ict';
  status: string = "DOWN";

  constructor(private statusService: StatusService) {}

  ngOnInit(): void {
    this.statusService.getStatus()
      .subscribe(response => {
        this.status = response.status;
        console.log(response.status);
      });
  }

}
