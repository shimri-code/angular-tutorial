import { Component } from '@angular/core';

export interface IWorker
{
  imgSrc :string ,
  name :string ,
  jobTitle :string ,
  about :string ,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  workers:IWorker[]= [
    {
      imgSrc :"../../assets/images/img1.jpg" ,
      name :"Shimri" ,
      jobTitle :"Software Enginner" ,
      about :"The best worker in the office" ,
    },
    {
      imgSrc :"../../assets/images/img2.jpg" ,
      name :"Omri" ,
      jobTitle :"Hardware Enginner" ,
      about :"The second best worker in the office" ,
    },
    {
      imgSrc :"../../assets/images/img3.jpg" ,
      name :"Ariel" ,
      jobTitle :"Party Guy" ,
      about :"The happiest worker in the office" ,
    }
  ];

  choosedName:string="";

  updateName(name:string)
  {
    this.choosedName = name;
  }
}
