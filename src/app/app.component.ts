import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template-driven-forms';

  first_Name: string='';
  last_name: string='';
  DOB: string='';
  emailAddress: string='';
  userName:string='';
  postal:string='';
  city:string='';
  country:string='';
  region:string='';

  // @ViewChild('form') form:NgForm;
  @ViewChild(NgForm) form: NgForm;
  form_submitted(form1) {
    // console.log(this.form);
    // console.log(this.form.value.firstname);
    // console.log(this.form.controls['firstname'].value);
    this.first_Name = this.form.value.firstname;
    this.last_name = this.form.value.firstname;
    this.DOB = this.form.value.dob;
    this.emailAddress = this.form.value.email;
    this.userName = this.form.value.username;
    this.country = this.form.value.address.country;
    this.postal = this.form.value.address.post;
    this.city = this.form.value.address.city;
    this.region = this.form.value.address.region;
    this.form.reset();
    this.form.form.patchValue({
      gender:'Male',
      address:{
        country:'India',
      },
    })
  }
  // form_submitted1(form2) {
  //   console.log(form2);
  //   //  console.log(this.obser);
  // }
  gender = [
    { id: "check-male", value: "Male", display: "Male" },
    { id: "check-female", value: "Female", display: "Female" },
    { id: "check-other", value: "Other", display: "Prefer not to say" },
  ]
  // child = inject(ChildComponent);
  @ViewChild(ChildComponent) child: ChildComponent;
  ngAfterViewInit() {
    this.child.child_event.subscribe((data) => {
      console.log(data);
    });
  }
  // obser = this.child.child_event.subscribe((data)=>{
  //   console.log(data);
  // });

  generate_uname() {
    let uname: string = '';
    if (this.first_Name.length >= 3) {
      uname += this.first_Name.slice(0, 3);
    } else {
      uname += this.first_Name;
    }

    if (this.last_name.length >= 3) {
      uname += this.last_name.slice(0, 3);
    } else {
      uname += this.last_name;
    }

    let dob = new Date(this.DOB);
    uname += dob.getFullYear();
    console.log(uname);
    // this.form.setValue({
    //   address:{
    //     city:this.form.value.address.city,
    //     country:this.form.value.address.country,
    //     post:this.form.value.address.post,
    //     region:this.form.value.address.region,
    //     street1:this.form.value.address.street1,
    //     street2:this.form.value.address.street2,
    //   },
    //   dob:this.form.value.dob,
    //   email:this.form.value.email,
    //   firstname:this.form.value.firstname,
    //   gender:this.form.value.gender,
    //   lastname:this.form.value.lastname,
    //   phone:this.form.value.phone,
    //   username:uname,
    // })

    this.form.form.patchValue({
      username:uname,
      address:{
        city:'London',
      }
    })
  }
}
