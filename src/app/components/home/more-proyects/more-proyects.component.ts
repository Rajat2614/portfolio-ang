import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { AnalyticsService } from "src/app/services/analytics/analytics.service";

@Component({
  selector: "app-more-proyects",
  templateUrl: "./more-proyects.component.html",
  styleUrls: ["./more-proyects.component.scss"],
})
export class MoreProyectsComponent implements OnInit {
  Projects = [
    {
      Title: "HackerRank Automation",
      Description:
        "A HackerRank Code Submission program which visit the website and submit code from local file based on the name of the file as the question number on hackerrank",
      Technologies: ["Nodejs", "Promise/Async-Await", "Puppeteer", "cheerio"],
      ghLink: "https://github.com/Rajat2614/HackerRank-Automation",
      demoLink: "https://github.com/Rajat2614/HackerRank-Automation",
    },

    {
      Title: "E-Commerce Website",
      Description: "E-Commerce Website (personal practicing on design)",
      Technologies: ["Html", "Css", "JavaScript", "Responsive"],
      ghLink: "https://github.com/Rajat2614/E-Commerce-Website",
      demoLink: "https://rajat2614.github.io/E-Commerce-Website/",
    },

    {
      Title: "DrumKit Website",
      Description: "DrumKit website to play sounds on key press.",
      Technologies: ["Html", "Css", "Animation", "Javascript"],
      ghLink: "https://github.com/Rajat2614/DrumKit",
      demoLink: "https://rajat2614.github.io/DrumKit/",
    },
  ];
  constructor(
    private router: Router,
    public analyticsService: AnalyticsService
  ) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  redirect(route: string, event) {
    const id = event.target.id;
    if (id == "demoLink" || id == "ghLink") {
      return;
    }
    window.open(route, "_blank");
  }
}
