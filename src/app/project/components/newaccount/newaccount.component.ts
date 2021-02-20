import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent implements OnInit {

  onSubmit(form){
    console.log(form);
    this.http.post('https://httpbin.org/post',JSON.stringify(form.value))
      .pipe(map(res=>res))
      .subscribe(dados=>console.log(dados));
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
}
