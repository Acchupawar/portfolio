import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

   sections = document.querySelectorAll('section');
   navLinks = document.querySelectorAll('header nav a');
   header = document.querySelector('header');

   
  scroll(){
    window.onscroll = () => {
  this.sections.forEach( sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if( top >= offset && top < offset + height){
      this.navLinks.forEach( link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']')?.classList.add('acitve');
      })
    }
  } )
}

}

  nvabar(){
    this.header!.classList.toggle('sticky',window.scrollY > 100 );
  }

}
