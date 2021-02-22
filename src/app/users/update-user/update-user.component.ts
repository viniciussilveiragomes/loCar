import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  
  id: string | any;
  request: RequestUpdate | any;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(`id ${this.id}`)
    this.userService.getUser(this.id).subscribe(res => {
      console.log(`resposta ${res.data.first_name}`);
      this.request = {
        name: `${res.data.first_name}`,
        job: ''
      }
    });
  }

  update() {
    this.userService.updateUser(this.id, this.request).subscribe( res=> {
      console.log(`atualizar: ${res.updatedAt}, Nome: ${res.name}, Job: ${res.job}`);
    });
  }  
}
