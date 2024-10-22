import { Component, OnInit } from '@angular/core';
import { LoadersService } from "../../../services/loaders/loaders.service";  // Importing LoadersService from the services folder

// Importing mock data directly from the constants file
import { TOP_DISCUSSIONS, DASHBOARD, TOP_RECENT_POSTS, TOP_MEMBERS, TRENDING_TAGS } from '../../../../constants/mockData';

@Component({
  selector: 'app-right-side-navbar',
  templateUrl: './right-side-navbar.component.html',
  styleUrls: ['./right-side-navbar.component.css'] // Fixed typo from 'styleUrl' to 'styleUrls'
})

export class RightSideNavbarComponent implements OnInit {

  topDiscussions = TOP_DISCUSSIONS;
  dashboard = DASHBOARD;
  topRecentPosts = TOP_RECENT_POSTS;
  topMembers = TOP_MEMBERS;
  trendingTags = TRENDING_TAGS;

  constructor(public loaderService: LoadersService) {}

  ngOnInit(): void {
    // Initialize any logic on component initialization if needed
  }

  // Simulate selecting a top discussion and printing the result
  OpenTopDiscussionBySelection(data: any) {
    console.log("In Top Discussion", data);
  }

  // Simulate selecting a recent post and printing the result
  OpenRecentPostBySelection(data: any) {
    console.log("In Top Recent Post", data);
  }

  // Since we're not using services anymore, GetDashboard simply returns mock data
  GetDashboard() {
    console.log('Dashboard data:', this.dashboard);
  }

  // Fetch top members from mock data (no need for an API call)
  GetTopMembers() {
    console.log('Top Members:', this.topMembers);
  }

  // Fetch recent posts from mock data (no need for an API call)
  GetRecentPost() {
    console.log('Recent Posts:', this.topRecentPosts);
  }
}