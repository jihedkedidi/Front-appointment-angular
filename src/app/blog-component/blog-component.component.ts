import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.css']
})
export class BlogComponentComponent {

  
  articles = [
    {
      title: 'Article 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo sapien. Etiam tempor libero quis augue rhoncus, eget dapibus libero congue. Morbi id augue laoreet, posuere augue vel, fringilla ex.',
      image: 'https://via.placeholder.com/500x200.png?text=Article+1',
      readMoreText: 'Read more'
    },
    {
      title: 'Article 2',
      description: 'Suspendisse posuere, nibh ac eleifend maximus, nulla tellus rhoncus tellus, non consequat turpis libero a tellus. Aliquam mollis, mauris a congue bibendum, nisl mauris eleifend odio, quis pretium magna enim vel lectus.',
      image: 'https://via.placeholder.com/500x200.png?text=Article+2',
      readMoreText: 'Read more'
    },
    {
      title: 'Article 3',
      description: 'Nullam vel tristique velit. Ut dictum metus vel neque bibendum, ac efficitur dolor pellentesque. Duis eu enim sit amet velit scelerisque egestas non non eros. Vestibulum et ultricies'

    }
  ]
}
