import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'urna-eletronica';

  valueInput1: string ="";
  valueInput2: string ="";
  valueVoto: string ="";
  img: string ="";
  candidate: string = "";
  broken: string ="";
  vice: string ="";
  end = true;
  disabled= true;
  nullVote= false;
  white= true;
  textWhiteVote= false;
  disabledBtnWhite= false;

  candidates = [
    {
      name: "HOMELANDER",
      number: "22",
      broken: "VOUGHT",
      vice: "BLACK NOAR",
      img: "https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2022/07/12/1133017655-the-boys-homelander.jpg"
    },
    {
      name: "SOLDIER BOY",
      number: "13",
      broken: "NaN",
      vice: "BILLY BRUTO",
      img: "https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2022/07/08/1601506025-jensen-ackles-soldier-boy-the-boys.jpg"
    }
  ]

  setValue(event: string){
    if(this.valueInput1== ""){
      this.valueInput1= event;
    }
    else if(this.valueInput2== ""){
      this.valueInput2= event;
      this.disabled= false;
    }
    this.valueVoto= this.valueInput1 + this.valueInput2;
    this.analyzeCandidate();
  }


  analyzeCandidate(){
    if(this.valueInput1 != ""){
      this.disabledBtnWhite= true;
    }
    if(this.valueVoto == this.candidates[0].number){
      this.img = this.candidates[0].img;
      this.candidate = this.candidates[0].name;
      this.broken = this.candidates[0].broken;
      this.vice = this.candidates[0].vice;
    }
    if(this.valueVoto == this.candidates[1].number){
      this.img = this.candidates[1].img;
      this.candidate = this.candidates[1].name;
      this.broken = this.candidates[1].broken;
      this.vice = this.candidates[1].vice;
    }
    if(this.valueInput2 != ""){
      if(this.valueVoto != this.candidates[0].number && this.valueVoto != this.candidates[1].number ){
      this.nullVote= true;
    }
    }
  }

  limparCAMPOS(){
    this.valueInput1="";
    this.valueInput2="";
    this.img="";
    this.candidate="";
    this.vice="";
    this.broken="";
    this.disabled= true;
    this.nullVote= false;
    this.white = true;
    this.textWhiteVote = false;
    this.disabledBtnWhite = false;
  }

  votoBRANCO(){
    this.white = false;
    this.textWhiteVote = true;
    this.disabled= false;
  }

  confirm(){
    this.end = false;
  }

}





