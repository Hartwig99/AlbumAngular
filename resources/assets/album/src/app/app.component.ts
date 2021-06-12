import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'album';
  private posts: Post[] = [
    new Post("nome", "titulo", "subtitulo", "email", "mensagem"),
    new Post("nome", "titulo", "subtitulo", "email", "mensagem"),
    new Post("nome", "titulo", "subtitulo", "email", "mensagem"),
    new Post("nome", "titulo", "subtitulo", "email", "mensagem"),
    new Post("nome", "titulo", "subtitulo", "email", "mensagem"),
    new Post("nome", "titulo", "subtitulo", "email", "mensagem"),
  ];
}
