import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
