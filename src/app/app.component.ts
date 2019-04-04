import { Component } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private cs: CookieService) {}

  set() {
    alert(this.cs.set("test", "testing Cookie", 12));
  }
  set2() {
    alert(this.cs.set("test2", "testing Cookie", 12));
  }
  get() {
    alert(this.cs.get("test"));
  }

  del() {
    alert(this.cs.deleteAll("test"));
  }
  del2() {
    alert(this.cs.delete("test2"));
  }
}
