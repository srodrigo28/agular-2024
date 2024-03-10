import { Component } from '@angular/core';
import { User } from '../../services/user';

import { ModalViewUserComponent } from './modal-view-user/modal-view-user.component';
import { ModalFormUserComponent } from './modal-form-user/modal-form-user.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrl: './user-crud.component.scss'
})
export class UserCrudComponent {

  listUsers: User[] = [];

  constructor(
    private usersService: UsersService,
  ){}

  ngOnInit() {
    this.getListUsers();
  }

  getListUsers(){
    // this.usersService.getAllUsers().subscribe({
    //   next: (response: any) => {
    //     console.log('Lista de usuários firebase ', response)
    //     this.listUsers = response;

    //   },
    //   error: error => console.log(error)
    // });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    
  }

  // logica do modal
  // openModalViewUser(user: User){
  //   this.dialog.open(ModalViewUserComponent, {
  //     width: '700px',
  //     height: '360px',
  //     data: user
  //   })
  // }

  // openModalAddUser(){
  //   this.dialog.open(ModalFormUserComponent, {
  //     width: '700px',
  //     height: '400px',
  //   }).afterClosed().subscribe(() => this.getListUsers() )
  // }
  
}

