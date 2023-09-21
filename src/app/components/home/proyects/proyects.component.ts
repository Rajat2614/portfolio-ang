import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {
  Projects = [
    {
      imgs:[
        '../../../../assets/images/talkit/login.png',
        '../../../../assets/images/talkit/interface.png',
        '../../../../assets/images/talkit/chat.png',
        '../../../../assets/images/talkit/avatar.png',
      ],
      Title:'TalkIt Chat App',
      Description:'The purpose of this project is to enhance the safety of prescribing drugs and to address the challenges related to prescribing errors which can have significant damage the patient’s health, the project ultimate goal is to contribute to the overall improvement of medication safety in the healthcare department.',
      Technologies:['Angular','SASS','Angular-Material' , 'RxJS', 'Node.js'],
      ghLink:'https://github.com/loayeldin/medmatch',
      demoLink:'https://medmatchh.netlify.app/'
    },

    {
      imgs:[
        '../../../../assets/images/todo-app/1.PNG',
        '../../../../assets/images/todo-app/2.PNG',
        '../../../../assets/images/todo-app/3.PNG',
      ],
      Title:'Dynamic Todo App',
      Description:'Users can add, edit, delete, and prioritize tasks. Each task typically contains a title, description, due date, and status. The app allows users to reorder tasks by dragging and dropping them into different categories or positions, making it easy to organize and prioritize tasks.',
      Technologies:['ReactJs','CSS','HTML' , 'JS'],
      ghLink:'https://github.com/Rajat2614/ToDo-List',
      demoLink:'https://dynamic-todo-app.netlify.app/'
    },

    {
      imgs:[
        '../../../../assets/images/github-finder/1.png',
        '../../../../assets/images/github-finder/2.png',
        '../../../../assets/images/github-finder/3.png',
        '../../../../assets/images/github-finder/4.png',
      ],
      Title:'Github Finder',
      Description:'Help you Find anyone on github and their latest repositories along with their details and profile picture.',
      Technologies:['HTML','ReactJS','Tailwind CSS','GITHUB REST API'],
      ghLink:'https://github.com/Rajat2614/Github-Finder',
      demoLink:'https://github-finder-gamma-smoky.vercel.app/'
    },

    {
      imgs:[
      
        '../../../../assets/images/guess/1.png',
        '../../../../assets/images/guess/2.png',
      ],
      Title:'Guess the Word',
      Description:'WORDLE Clone',
      Technologies:['HTML', 'CSS'],
      ghLink:'https://github.com/Rajat2614/GuessTheWord',
      demoLink:'https://rajat2614.github.io/GuessTheWord/'
    },
    {
      imgs:[
      
        '../../../../assets/images/colorguess/1.png',
   
      ],
      Title:'Color Guess',
      Description:` Color Guessing game based on the content of RED , GREEN , and BLUE.`,
      Technologies:['HTML', 'CSS'],
      ghLink:'https://github.com/Rajat2614/ColorGuess',
      demoLink:'https://rajat2614.github.io/ColorGuess/'
    },

    


  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 900,
    items: 1,
    autoplay: true,
    autoplayTimeout:3000
  }

  @ViewChild('imgContainer') imgContainer: ElementRef;


  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {



  }

debug(){

  this.imgContainer.nativeElement.scroll({
    top: this.imgContainer.nativeElement.scrollHeight,
    left: 0,
    behavior: 'smooth',    
  });
}

}
