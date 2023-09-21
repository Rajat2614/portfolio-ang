import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "src/app/services/analytics/analytics.service";

@Component({
  selector: "app-jobs",
  templateUrl: "./jobs.component.html",
  styleUrls: ["./jobs.component.scss"],
})
export class JobsComponent implements OnInit {
  Experiences: any[] = [
    {
      Tab: "Experience",
      company: "Biz2Credit",
      Title: "Software Development Engineer",
      Date: "Jul 2023 - Present",
      Description: [
        "REST APIS : Created Rest Apis on AWS using Serverless Framework. ",
        "Implementing continuous improvements, working on Backend",
        "Functional programming in templates and plugins to add the necessary monitoring features.",
        "Operated on various Cloud platforms supported by serverless framework to build a client-oriented cloud gateway."
      ],
    },
    {
      Tab: "Internship",
      company: "Cyberoi Systems",
      Title: "Backend developer Intern",
      Date: "Jun 2022 - Aug 2022 (3 months)",
      Description: [
        "REST APIS : Created Rest Apis on AWS using Serverless Framework. ",
        "Implementing continuous improvements, working on Backend",
        "Functional programming in templates and plugins to add the necessary monitoring features.",
        "Operated on various Cloud platforms supported by serverless framework to build a client-oriented cloud gateway."
      ],
    },
    {
      Tab: "Education",
      company: "NSUT East Campus",
      Title: "B.Tech. in Computer Science",
      Date: "2019 — 2023",
      Description: [
        "I graduated from Computer Science Branch of Netaji Subhas University Of Technology East Campus, Geeta Colony.",
        "The graduation project is a Weapon detection system(Survelliance), that automates the process of analyzing images and identifying any lethal weapons in it, additionally users have the ability to choose from different models to enhance the accuracy through our application.",
      ],
    },
  ];
  active = 0;

  constructor(public analyticsService: AnalyticsService) {}

  ngOnInit(): void {}
}
