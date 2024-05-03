import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel } from '../../shared/store/Blog/Blog.model';
import { getblog } from '../../shared/store/Blog/Blog.selectors';
import { AppstateModel } from '../../shared/store/Global/Appstate.model';
import { MatDialog } from '@angular/material/dialog';
import { AddblogComponent } from '../addblog/addblog.component';
import { removeblog } from 'src/app/shared/store/Blog/Blog.actions';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  constructor(private store: Store<AppstateModel>, private dialog: MatDialog) { }


  bloglist!: BlogModel[];

  ngOnInit(): void {
    this.store.select(getblog).subscribe(item => {
      this.bloglist = item;
      console.log(this.bloglist)
    })
  }

  Addblog() {
    this.Openpopup(0, 'Add Blog');
  }

  Openpopup(id: any, title: any, isedit = false) {
    this.dialog.open(AddblogComponent, {
      width: '40%',
      data: {
        id: id,
        title: title,
        isedit: isedit
      }
    })
  }

  EditBlog(id: any) {
    this.Openpopup(id, 'Edit Blog', true);
  }
  RemoveBlog(id: any) {
 this.store.dispatch(removeblog({id:id}))
  }
}
