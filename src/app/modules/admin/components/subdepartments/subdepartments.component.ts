import { Component,OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RestserviceService } from '../../../../services/restservice.service';
import { ToastrService } from 'ngx-toastr';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-subdepartments',
  standalone: true,
  imports: [ReactiveFormsModule,DialogModule,CommonModule],
  templateUrl: './subdepartments.component.html',
  styleUrl: './subdepartments.component.scss'
})
export class SubdepartmentsComponent implements OnInit {
    
  constructor(private restservice: RestserviceService, private toastr: ToastrService) {
    this.subdepartmentForm = new FormGroup({});
  }
  public subdepartmentForm: FormGroup;
  public subdepartmentpopup: boolean = false;
  public departmentList: any = [];
  public departmentId: any;
  ngOnInit(): void {
    this.initSubDepartentForm();
    this.GetdepartmentList();
  }
   
  initSubDepartentForm() {
    this.subdepartmentForm = new FormGroup({
      store_type: new FormControl('', Validators.required),
      sub_department_name: new FormControl('', Validators.required),
      sub_department_code: new FormControl('', Validators.required),
      department_id: new FormControl('', Validators.required),
      description_sub_dept: new FormControl('', Validators.required),
      incharge: new FormControl('', Validators.required),
      prefix: new FormControl('', Validators.required),
      complaint_maintance_dep: new FormControl('', Validators.required),
      cssd_dept: new FormControl('', Validators.required),
      linenn_dept: new FormControl('', Validators.required),
      house_keeping_dept: new FormControl('', Validators.required),
      cash_purchase: new FormControl('', Validators.required),
      transit_dept: new FormControl('', Validators.required),
      priority_dept: new FormControl('', Validators.required),
      cash_patient_return: new FormControl('', Validators.required),
      indent_pharmacy: new FormControl('', Validators.required),
      name_print: new FormControl('', Validators.required),
      purchase_dept: new FormControl('', Validators.required),
      auto_consumption: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
  }

  GetdepartmentList() {
    this.restservice.GetDepartmentList('/userAPi/departmentlist/').subscribe(
      (result: any) => {
        this.departmentList = result;
      },
      (error: any) => {
        this.toastr.error('Department List Fetch Failed');
      }
    );
  }

  onSubDepartmentSubmit() {
    if (this.subdepartmentForm.valid) {
      // Get form Data and send to server
      this.subdepartmentForm.value.department_id = this.departmentId;
      if(this.subdepartmentForm.value.complaint_maintance_dep == true){
        this.subdepartmentForm.value.complaint_maintance_dep = 1;
      }
      if(this.subdepartmentForm.value.cssd_dept == true){
        this.subdepartmentForm.value.cssd_dept = 1;
      }
      if(this.subdepartmentForm.value.linenn_dept == true){
        this.subdepartmentForm.value.linenn_dept = 1;
      }
      if(this.subdepartmentForm.value.house_keeping_dept == true){
        this.subdepartmentForm.value.house_keeping_dept = 1;
      }
     
      if(this.subdepartmentForm.value.transit_dept == true){
        this.subdepartmentForm.value.transit_dept = 1;
      }
      if(this.subdepartmentForm.value.priority_dept == true){
        this.subdepartmentForm.value.priority_dept = 1;
      }
      if(this.subdepartmentForm.value.cash_patient_return == true){
        this.subdepartmentForm.value.cash_patient_return = 1;
      }
      if(this.subdepartmentForm.value.indent_pharmacy == true){
        this.subdepartmentForm.value.indent_pharmacy = 1;
      }
      if(this.subdepartmentForm.value.auto_consumption == true){
        this.subdepartmentForm.value.auto_consumption = 1;
      }
      let user_id = 1;
      var formdata = this.subdepartmentForm.value;
      // Merge user_id into formdata
      formdata.created_by = user_id;
      console.log(formdata);
      this.restservice.CreateSubDepartment('/userAPi/createSubDepartment/',this.subdepartmentForm.value).subscribe(
        (result: any) => {
          this.toastr.success('Sub Department Created Successfully');
          this.subdepartmentForm.reset();
        },
        (error: any) => {
          this.toastr.error('Sub Department Creation Failed');
          this.subdepartmentForm.reset();
        }
      );
    }
  }

  GetDepartmentsearchpopup() {
      this.subdepartmentpopup = true;
  }

  getdepartmentdetails(id: any) {
    this.subdepartmentForm.controls['department_id'].setValue(this.GetDepartmentNamebyid(id));
    this.departmentId = id;
    this.subdepartmentpopup = false;
  }

  GetDepartmentNamebyid(id: any) {
    let department_name = '';
    this.departmentList.forEach((element: any) => {
      if (element.department_id == id) {
        department_name = element.department_name + ' - ' + element.department_code;
      }
    });
    return department_name;
  }
}
