import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from "../services/http.service";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.scss"]
})
export class FormsComponent implements OnInit {
  details: any;
  test = [1, 2, 3];
  checkboxList = ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"];
  dropDownOption = ["Lorem ipsum1", "Lorem ipsum2", "Lorem ipsum3"];
  checkboxDropdownItems = [];
  dropItemR7: any;
  files = [
    "file1.name",
    "file2.name",
    "file3.name",
    "file4.name",
    "file5.name"
  ];
  model = {};
  draftValue: any;
  reqId: any;
  requestorRole: any;
  isOwner = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private httpService: HttpService
  ) {
    this.activateRoute.queryParams.subscribe(params => {
      this.reqId = params.id;
    });
  }

  ngOnInit() {
    this.httpService.getJSON().subscribe(data => {
      const reqData = data.Requests.find(ele => ele.Id === +this.reqId);
      if (reqData) {
        const user = data.Users.find(ele => ele.Id === reqData.Requestor);
        if (user.Roles.indexOf('Owner') !== -1) {
          this.isOwner = true;
          alert('Requestor Role is Owner!!!');
        }
        alert('Requestor Role is not Owner!!! \n Hence form is disbaled');
      }
    });
  }

  selectedItem(item, e) {
    const index = this.checkboxDropdownItems.indexOf(item);

    if (e.target.checked === false) {
      if (index !== -1) {
        this.checkboxDropdownItems.splice(index, 1);
      }
    } else {
      if (this.checkboxDropdownItems.indexOf(item) === -1) {
        this.checkboxDropdownItems.push(item);
      }
    }
  }
  onSubmit(form) {
    alert("Form submitted...");
    this.router.navigate(["dashboard"]);
  }
  cancel(form) {
    this.router.navigate(["dashboard"]);
  }
  save(form) {
    this.draftValue = form;
    alert("Form Saved...");
    this.router.navigate(["dashboard"]);
  }
}
