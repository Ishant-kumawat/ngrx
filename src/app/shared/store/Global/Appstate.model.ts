import { BlogComponent } from "src/app/component/blog/blog.component";
import { countermodel } from "../../model/counter.model";
import { BlogModel, Blogs } from "../Blog/Blog.model";

export interface AppstateModel{
    counter:countermodel,
    blog:Blogs

}