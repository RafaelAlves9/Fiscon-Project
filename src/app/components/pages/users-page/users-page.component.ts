import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../modals/dialog-add-user/dialog.component';
import { ApiService } from '../../../services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogEditUserComponent } from '../../modals/dialog-edit-user/dialog-edit-user.component';
import { User } from 'src/app/Types/Types';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'tel','creationDate', 'updationDate', 'actions'];
  
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog : MatDialog,
    private api : ApiService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.getUserList();
  }
  
  //dialog opening
  openAddDialog(){
      this.dialog.open(DialogComponent)
      .afterClosed().subscribe(()=>{
        this.getUserList()
      })
    };
  openEditDialog(user : User) {
    this.dialog.open(DialogEditUserComponent, {
      data: user
    }).afterClosed().subscribe(()=>{
      this.getUserList()
    })
  };
  //filter search
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  //api actions
  getUserList(){
    this.api.getUser()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }
  removeUser(user : User){
    this.api.removeUser(user)
    .subscribe({
      next:()=>{
        this.getUserList();
        this.alert.openAlert(`O usuário ${user.name} foi excluído com sucesso`, "Ok")
      }
    })
  }
}
