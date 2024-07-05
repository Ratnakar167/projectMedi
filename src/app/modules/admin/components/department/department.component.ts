import { Component,OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RestserviceService } from '../../../../services/restservice.service';
import { ToastrService } from 'ngx-toastr';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [ReactiveFormsModule,DialogModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss'
})
export class DepartmentComponent implements OnInit{
  public departmentForm: FormGroup;
  constructor(private restservice: RestserviceService, private toastr: ToastrService) { 
    this.departmentForm = new FormGroup({});
  }
  public departmentpopup: boolean = false;
  ngOnInit(): void {
    this.initDepartentForm();
  }
  initDepartentForm() {
    this.departmentForm = new FormGroup({
      department_name: new FormControl('', Validators.required),
      department_code: new FormControl('', Validators.required),
      head_dept: new FormControl('', Validators.required),
      email_id: new FormControl('', Validators.required),
      description_dept: new FormControl('', Validators.required),
      ip_indenting_dept: new FormControl('', Validators.required),
      location_id: new FormControl('', Validators.required),
      issue_pt_indication: new FormControl('', Validators.required),
      consigment_dept: new FormControl('', Validators.required),
      login_dept: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),

    });
  }
  onDepartmentSubmit() {
    if (this.departmentForm.valid) {
      // Get form Data and send to server
      if(this.departmentForm.value.consigment_dept == true){
        this.departmentForm.value.consigment_dept = 1;
      }
      let user_id = 1;
      var formdata = this.departmentForm.value;
      // Merge user_id into formdata
      formdata.created_by = user_id;
      console.log(formdata);
      this.restservice.CreateDepartment('/userAPi/departmentcreate/',this.departmentForm.value).subscribe(
        (result: any) => {
          this.toastr.success('Department Created Successfully');
          this.departmentForm.reset();
        },
        (error: any) => {
          this.toastr.error('Department Creation Failed');
          this.departmentForm.reset();
        }
      );
    }
  }

 
  Getsearchpopup() {
     this.departmentpopup = true;
    // this.updateSheetingRoaster.modal('show');
    // this.id = item.id;
    // this.service_feedback_type = item.service_feedback_type;
    // this.service_email = item.service_email;
    // this.name = item.name;
    // this.setForm(this.service_feedback_type, this.service_email, this.name);
  }

  getdepartmentdetails(id:any){
    console.log(id);
    this.departmentpopup = false;
    this.departmentForm.controls['head_dept'].setValue(id);
  }
}
