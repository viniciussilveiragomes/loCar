import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  id: string | any;
  user: User | any;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(`id ${this.id}`)
    this.userService.getUser(this.id).subscribe(res => {
      console.log(`resposta ${res.data.first_name}`);
      this.user = res.data.first_name
    });
  }

  delete() {
    this.userService.deleteUser(this.id).subscribe( res => {
      console.log('excluido com sucesso');
    });
  }  
}
