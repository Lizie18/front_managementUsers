import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  users: Array<any>;
  ngOnInit(): void {
    this.users =
      [
        {
          id: '5e35a1b29d3bfde87a6e12f5',
          enabled: true,
          actived: false,
          name: 'Patricia Tate',
          username: 'Long',
          usergroup: 'Registered',
          email: 'longtate@globoil.com',
          lastVisit: '2015-02-14T04:39:35 +05:00',
          registered: '2018-02-12T05:29:10 +05:00'
        },
        {
          id: '5e35a1b22c4e9f764b11a098',
          enabled: false,
          actived: true,
          name: 'Cynthia Rhodes',
          username: 'Meredith',
          usergroup: 'Registered',
          email: 'meredithrhodes@globoil.com',
          lastVisit: '2019-09-23T04:08:16 +05:00',
          registered: '2014-12-04T07:13:33 +05:00'
        },
        {
          id: '5e35a1b2b38e7ca8e491ba86',
          enabled: false,
          actived: false,
          name: 'Barbara Pearson',
          username: 'Keisha',
          usergroup: 'Registered',
          email: 'keishapearson@globoil.com',
          lastVisit: '2017-07-26T09:22:28 +05:00',
          registered: '2017-02-27T06:16:33 +05:00'
        },
        {
          id: '5e35a1b2b8b816742c380966',
          enabled: true,
          actived: false,
          name: 'Henrietta Reilly',
          username: 'Mcguire',
          usergroup: 'Registered',
          email: 'mcguirereilly@globoil.com',
          lastVisit: '2017-10-21T08:32:24 +05:00',
          registered: '2015-03-26T04:43:15 +05:00'
        },
        {
          id: '5e35a1b226e647cacfee1a81',
          enabled: false,
          actived: false,
          name: 'Molly Todd',
          username: 'Holden',
          usergroup: 'Registered',
          email: 'holdentodd@globoil.com',
          lastVisit: '2017-06-09T01:15:25 +05:00',
          registered: '2016-08-03T08:04:17 +05:00'
        },
        {
          id: '5e35a1b2f5c5d2e9ebbb5f67',
          enabled: true,
          actived: false,
          name: 'Alma Gould',
          username: 'Lela',
          usergroup: 'Registered',
          email: 'lelagould@globoil.com',
          lastVisit: '2018-09-05T08:17:04 +05:00',
          registered: '2016-07-10T10:43:59 +05:00'
        },
        {
          id: '5e35a1b2af9fcc62afa9fc79',
          enabled: false,
          actived: true,
          name: 'Monroe Mccall',
          username: 'Josephine',
          usergroup: 'Registered',
          email: 'josephinemccall@globoil.com',
          lastVisit: '2015-04-19T02:11:13 +05:00',
          registered: '2016-05-12T03:03:11 +05:00'
        },
        {
          id: '5e35a1b23c23b327dd6115ce',
          enabled: true,
          actived: true,
          name: 'Valenzuela Knowles',
          username: 'Lynne',
          usergroup: 'Registered',
          email: 'lynneknowles@globoil.com',
          lastVisit: '2014-09-27T05:18:58 +05:00',
          registered: '2017-04-25T05:09:46 +05:00'
        },
        {
          id: '5e35a1b2a964d3b85656c4d2',
          enabled: false,
          actived: true,
          name: 'Whitney Hampton',
          username: 'Kasey',
          usergroup: 'Registered',
          email: 'kaseyhampton@globoil.com',
          lastVisit: '2018-01-31T06:49:05 +05:00',
          registered: '2019-07-29T02:24:46 +05:00'
        },
        {
          id: '5e35a1b2a56ea4ab851229a0',
          enabled: false,
          actived: false,
          name: 'Lynn Best',
          username: 'Henry',
          usergroup: 'Registered',
          email: 'henrybest@globoil.com',
          lastVisit: '2018-07-23T07:54:03 +05:00',
          registered: '2019-10-10T05:27:07 +05:00'
        },
        {
          id: '5e35a1b2e86c5d34ec344842',
          enabled: true,
          actived: false,
          name: 'Webb Santana',
          username: 'Dianne',
          usergroup: 'Registered',
          email: 'diannesantana@globoil.com',
          lastVisit: '2019-09-18T03:17:11 +05:00',
          registered: '2019-05-25T06:35:55 +05:00'
        },
        {
          id: '5e35a1b2d1e696837e1b3309',
          enabled: true,
          actived: false,
          name: 'Morrow Williamson',
          username: 'Armstrong',
          usergroup: 'Registered',
          email: 'armstrongwilliamson@globoil.com',
          lastVisit: '2015-09-29T09:59:05 +05:00',
          registered: '2016-04-16T03:37:43 +05:00'
        },
        {
          id: '5e35a1b29e8525f1e6a29026',
          enabled: true,
          actived: true,
          name: 'Marina Matthews',
          username: 'Bernice',
          usergroup: 'Registered',
          email: 'bernicematthews@globoil.com',
          lastVisit: '2019-10-17T06:39:02 +05:00',
          registered: '2019-03-25T08:05:11 +05:00'
        },
        {
          id: '5e35a1b2e12990461a9e9c7b',
          enabled: false,
          actived: true,
          name: 'Kerry Norris',
          username: 'Christian',
          usergroup: 'Registered',
          email: 'christiannorris@globoil.com',
          lastVisit: '2019-09-30T04:42:18 +05:00',
          registered: '2020-01-16T08:28:08 +05:00'
        },
        {
          id: '5e35a1b294eef2cfbad03dbb',
          enabled: true,
          actived: true,
          name: 'Elvia Norman',
          username: 'Poole',
          usergroup: 'Registered',
          email: 'poolenorman@globoil.com',
          lastVisit: '2016-04-01T11:43:45 +05:00',
          registered: '2018-02-08T11:24:20 +05:00'
        },
        {
          id: '5e35a1b24e1c9c544ef76323',
          enabled: true,
          actived: false,
          name: 'Mccray Phillips',
          username: 'Francisca',
          usergroup: 'Registered',
          email: 'franciscaphillips@globoil.com',
          lastVisit: '2018-03-29T01:19:18 +05:00',
          registered: '2017-06-16T06:19:14 +05:00'
        },
        {
          id: '5e35a1b2cf5992112a620032',
          enabled: false,
          actived: false,
          name: 'Claudia Dyer',
          username: 'Ellis',
          usergroup: 'Registered',
          email: 'ellisdyer@globoil.com',
          lastVisit: '2017-07-20T11:13:31 +05:00',
          registered: '2019-10-19T01:13:35 +05:00'
        },
        {
          id: '5e35a1b231362e66fc570a82',
          enabled: true,
          actived: true,
          name: 'Roxanne Soto',
          username: 'Giles',
          usergroup: 'Registered',
          email: 'gilessoto@globoil.com',
          lastVisit: '2019-03-23T02:22:23 +05:00',
          registered: '2015-10-06T11:05:01 +05:00'
        },
        {
          id: '5e35a1b200a01e6fad058752',
          enabled: true,
          actived: false,
          name: 'Martin Mckenzie',
          username: 'Robbie',
          usergroup: 'Registered',
          email: 'robbiemckenzie@globoil.com',
          lastVisit: '2015-01-17T11:02:40 +05:00',
          registered: '2015-08-05T01:19:29 +05:00'
        },
        {
          id: '5e35a1b2209f6b3ee3576c26',
          enabled: false,
          actived: true,
          name: 'Mae Bradley',
          username: 'Millicent',
          usergroup: 'Registered',
          email: 'millicentbradley@globoil.com',
          lastVisit: '2016-07-02T06:55:35 +05:00',
          registered: '2019-09-01T03:42:08 +05:00'
        },
        {
          id: '5e35a1b27e894f0d72fa8da9',
          enabled: true,
          actived: true,
          name: 'Stein Dillon',
          username: 'Alexander',
          usergroup: 'Registered',
          email: 'alexanderdillon@globoil.com',
          lastVisit: '2018-02-03T02:09:15 +05:00',
          registered: '2019-12-11T03:39:02 +05:00'
        },
        {
          id: '5e35a1b227c779036e6aa28b',
          enabled: true,
          actived: false,
          name: 'Olga Webster',
          username: 'Lourdes',
          usergroup: 'Registered',
          email: 'lourdeswebster@globoil.com',
          lastVisit: '2016-06-30T11:51:36 +05:00',
          registered: '2019-12-01T04:34:47 +05:00'
        },
        {
          id: '5e35a1b2b4542592c64b6f36',
          enabled: true,
          actived: false,
          name: 'Payne Riggs',
          username: 'Kelli',
          usergroup: 'Registered',
          email: 'kelliriggs@globoil.com',
          lastVisit: '2014-12-17T05:15:42 +05:00',
          registered: '2018-07-20T06:41:54 +05:00'
        },
        {
          id: '5e35a1b26c35083bdb0c35a6',
          enabled: false,
          actived: false,
          name: 'Bright Bean',
          username: 'Rosario',
          usergroup: 'Registered',
          email: 'rosariobean@globoil.com',
          lastVisit: '2018-09-05T12:24:48 +05:00',
          registered: '2017-08-24T12:22:49 +05:00'
        },
        {
          id: '5e35a1b2f991706d89731995',
          enabled: false,
          actived: false,
          name: 'Georgina Battle',
          username: 'Virginia',
          usergroup: 'Registered',
          email: 'virginiabattle@globoil.com',
          lastVisit: '2015-02-22T09:58:52 +05:00',
          registered: '2016-09-10T10:40:01 +05:00'
        },
        {
          id: '5e35a1b2e967c96f594b0d71',
          enabled: true,
          actived: false,
          name: 'Leticia Burgess',
          username: 'Eleanor',
          usergroup: 'Registered',
          email: 'eleanorburgess@globoil.com',
          lastVisit: '2018-02-09T05:18:45 +05:00',
          registered: '2018-04-04T09:12:30 +05:00'
        },
        {
          id: '5e35a1b2fecaac7cc1dacf29',
          enabled: false,
          actived: true,
          name: 'Clayton Morgan',
          username: 'Morgan',
          usergroup: 'Registered',
          email: 'morganmorgan@globoil.com',
          lastVisit: '2018-06-01T10:05:14 +05:00',
          registered: '2018-11-04T02:19:13 +05:00'
        },
        {
          id: '5e35a1b238dc8f4d3846ca27',
          enabled: true,
          actived: true,
          name: 'Leanne Hooper',
          username: 'Annabelle',
          usergroup: 'Registered',
          email: 'annabellehooper@globoil.com',
          lastVisit: '2015-07-11T07:58:42 +05:00',
          registered: '2015-09-06T01:33:55 +05:00'
        },
        {
          id: '5e35a1b28327d1b6b4a716de',
          enabled: false,
          actived: false,
          name: 'Fisher Fitzpatrick',
          username: 'Figueroa',
          usergroup: 'Registered',
          email: 'figueroafitzpatrick@globoil.com',
          lastVisit: '2016-08-06T02:19:10 +05:00',
          registered: '2016-06-05T06:42:30 +05:00'
        },
        {
          id: '5e35a1b2314c11c90f5f5d50',
          enabled: false,
          actived: false,
          name: 'Jenkins Murray',
          username: 'Wilma',
          usergroup: 'Registered',
          email: 'wilmamurray@globoil.com',
          lastVisit: '2019-10-02T11:26:27 +05:00',
          registered: '2016-11-22T03:56:52 +05:00'
        }
      ];
  }

}
