import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';


@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {
  constructor(private httpService:HttpServiceService){}
  ngOnInit(): void {
    this.httpService.getStocks().subscribe((data)=>{
      console.log('stock',data);
    })
  }
}
