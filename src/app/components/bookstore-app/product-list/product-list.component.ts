import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  livros: any;
  BooksService : BooksService;

  constructor(BooksService: BooksService) {
    this.BooksService = BooksService;
  }

  ngOnInit() {
    this.livros = this.BooksService.getBook().subscribe((data => {
      this.livros = data;
      console.log(this.livros);
    }))
  }

}
