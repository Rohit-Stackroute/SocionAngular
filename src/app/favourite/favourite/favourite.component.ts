// tslint:disable: no-string-literal
// tslint:disable: prefer-const

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  dropdownList = [];
  optionCustomDate = false;
  dateTo = '';
  dateFrom = '';
  serializedDate = new FormControl((new Date()).toISOString());
  selectedItems = [];
  barData: any;
  stackedData: any;
  showCharts = false;
  yAxisLabel = 'Participant Attestations';
  meta: any;
  faCheck = faCheck;

  horizontalArr = ['Time Period', 'Location'];

  selectedHorizontalValue = 'Time Period';
  selectedVerticalValue = 'Participant Attestations';
  multiLineData: any;
  topics: any[] = [];
  modelSelected: any;
  dataArray: any[];
  newDataArray: any[] = [];
  newLocationArray = ['Andhra Pradesh',
  'Arunachal pradesh',
  'Assam',
  'Sikkim',
  'Nagaland',
  'Manipur',
  'Meghalaya',
  'Jammu kashmir',
  'Karnataka',
  'Madhya Pradesh',
  'Manipur',
  'Punjab',
  'Rajasthan',
  'Uttar Pradesh',
  'Chhattisgarh'
];
newTimeArray = ['Last 6 months',
  'Last 3 months',
  'Last 1 month',
  'Last 2 weeks',
  'Last 1 week',
  'Custom Date'];
  changeStackChart: boolean;

  constructor(private dataService: DataService, private router: Router) {
    let extras = this.router.getCurrentNavigation().extras;
    if (!!extras.state) {
      let selectedmetric = extras['state']['id'];
      this.selectedVerticalValue = selectedmetric;
      this.selectedHorizontalValue = 'Time Period';
      setTimeout(() => {
        this.showReports();
      });
    }
  }

  ngOnInit() {
    this.dataService.getDummyTopics().subscribe((data) => {
      let alltopics = [];
      data['data'].forEach(element => {
        alltopics.push(element['topic_name']);
      });
      console.log('topics', _.uniq(alltopics));
      this.newDataArray = _.uniq(alltopics);
    });
    this.showReports();
  }


  showReports() {
    this.dataService.setAllSelectedAxis({ dimension: this.selectedHorizontalValue, metric: this.selectedVerticalValue },
       this.selectedItems);

    this.getDataforCharts();
  }

  getDataforCharts() {
    this.dataService.$stackedChartData.subscribe((stackdata) => {
      this.stackedData = stackdata;
      this.dataService.$barChartData.subscribe((bardata) => {
        this.barData = bardata;
      });
    });
    // this.dataService.getAllTopics();
    this.dataService.$allTopics.subscribe((topics: any[]) => {
      this.topics = topics;
      this.dropdownList = [];

      setTimeout(() => {
        this.dropdownList = this.topics;
        this.newDataArray = this.topics;
      }, 500);
    });
    setTimeout(() => {
      this.showCharts = true;
      this.changeStackChart = true;
    });
  }

  onTopicChange(event) {
    console.log('Event on Topic : ', event);
    this.changeStackChart = false;
  }

  onLocationChange(event) {
    console.log('Event on Location : ', event);
  }

  onTimeChange(event) {
    console.log('Event on Time : ', event);
    if (event === 'Custom Date') {
      this.optionCustomDate = true;
    } else {
      this.optionCustomDate = false;
      this.dateFrom = '';
      this.dateTo = '';
    }
  }
}
