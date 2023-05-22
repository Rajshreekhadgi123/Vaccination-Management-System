import { Component } from '@angular/core';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.scss']
})
export class VaccineComponent {

  candidatename = "";

  havedisease :any =[
    'yes' , 'no'
  ];

  disableadd = true;

constructor(){
  let data = localStorage.getItem('dose1_data');
  if(data)
  this.candidatedose1 = JSON.parse(data);

  let data2 = localStorage.getItem('dose2_data');
  if(data2)
  this.candidatedose2 = JSON.parse(data2);
}

  candidate : any=[
  
    {
      candidatename:"prachi",
    },
    {
      candidatename:"samiksha",
    },
    {
      candidatename:"Rahul",
    }
  ];


  candidatedose1 : any=[];
  candidatedose2 : any=[];

  addcandidates()
  {
    let obj = {
      candidatename : this.candidatename
    }
    this.disease();
   
    this.candidate.push(obj);
    this.clearfield();
    

  }

  clearfield()
  {
    this.candidatename = "";
  }

  dose1(i:any)
  {
    this.candidatedose1.push(this.candidate[i])
    this.candidate.splice(i , 1);

    localStorage.setItem('dose1_data' , JSON.stringify(this.candidatedose1))

  }

  dose2(i:any)
  {
    this.candidatedose2.push(this.candidatedose1[i])
    this.candidatedose1.splice(i , 1);

    localStorage.setItem('dose2_data' , JSON.stringify(this.candidatedose2))


  }

  deletecandidate(i:any)
  {
   this.candidate.splice(i,1)
  }


  undodose1(i:any)
  {
    this.candidate.push(this.candidatedose1[i])
    this.candidatedose1.splice(i , 1);
  }

  undodose2(i:any)
  {
    this.candidatedose1.push(this.candidatedose2[i])
    this.candidatedose2.splice(i , 1);
  }

  // radio button disease alert

  disease()
  {
    if(this.havedisease == 'yes')
    {
      alert("you are not allowed for vaccination..");
      this.disableadd = false
    }
    else{
      this.disableadd = true
    }
   
  }

  
}

