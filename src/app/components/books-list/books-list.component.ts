/*import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  Books: any = [];
  constructor(private crudService: CrudService) {
    this.crudService.GetBooks().subscribe((data: any) => {
      this.Books = data.data;
    });
  }

  ngOnInit() {}
  delete(id: any, i: any) {
    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteBook(id).subscribe((data: any) => {
        this.Books.splice(i, 1);
      });
    }
  }
}*/

import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  Books: any[] = [];

  constructor(private crudService: CrudService) {
    // Sample data
    this.Books = [
      { _id: 1, name: 'Sample Book 1', price: 10, description: 'Description for Sample Book 1' },
      { _id: 2, name: 'Sample Book 2', price: 20, description: 'Description for Sample Book 2' },
      { _id: 3, name: 'Sample Book 3', price: 30, description: 'Description for Sample Book 3' }
    ];
  }

  ngOnInit() {}

  delete(id: any, i: number) {
    if (window.confirm('Do you want to go ahead?')) {
      // Assuming deleteBook() method doesn't actually delete the sample data
      this.crudService.deleteBook(id).subscribe(() => {
        this.Books.splice(i, 1);
      });
    }
  }
}

