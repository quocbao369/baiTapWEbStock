import { Component } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { MessageService } from 'src/app/services/message.service';
import { StockService } from '../../services/stock.service';


@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
  providers: [MessageService]
})
export class CreateStockComponent {
  public stock : Stock;

  public confirmed = false;
  public message ='';
  //các giá trị của option
  public exchanges =['NYSE','NASDAQ','OTHER'];

  constructor(private stockService : StockService,
              public messageService : MessageService){
    this.stock = new Stock ('Test','',0,0,'NASDAQ',false);
    this.messageService.message = 'Component Level: Hello Message Service';
  }
  setStockPrice(price: number){
    this.stock.price = price;
    this.stock.previousPrice = price;
  }
  createStock(stockForm: any){
    if (stockForm.valid){
      console.log('Creating stock ',this.stock);
      let created = this.stockService.createStock(this.stock);
      if(created) {
        this.message = 
        'Succesfully created stock with stock code: '
              + this.stock.code;
        this.stock = new Stock('','',0,0,'NASDAQ',false);
      }else{
        this.message =
         'Stock with stock code: ' + this.stock.code +
        ' already exists';
      }
    }
    else{
      console.error('Stock form is in an invalid state');
    }
  }
  createStock1(stockForm: any) {
    if (stockForm.valid) {
      this.stockService.createStock(this.stock)
          .subscribe((result: any) => {
            this.message = result.msg;
            this.stock = new Stock('','',0,0,'NASDAQ',false);
          }, (err) => {
            this.message = err.error.msg;
          });
    } else {
      console.error('Stock form is in an invalid state');
    }
}
}
