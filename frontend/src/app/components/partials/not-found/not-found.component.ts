import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  @Input()
  visible= false;
  @Input()
  notfoundmessage = "nothing found!!";  
  @Input()
  resetlinktext="reset"
  @Input()
  resetlinkroute="/"

}
