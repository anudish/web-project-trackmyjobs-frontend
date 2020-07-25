import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blogsfilter'
})
export class BlogsfilterPipe implements PipeTransform {

  transform(blog: any, keyword: any): any {
    if (keyword === undefined) return blog;
    console.log(blog);

    return blog.filter(function (blog) {
      if (blog.title === null) { return }
      return blog.title.toLowerCase().includes(keyword.toLowerCase())
    })
  }
}
