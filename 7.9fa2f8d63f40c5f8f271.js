(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"74xe":function(a,s,n){"use strict";n.r(s),n.d(s,"sources",function(){return e});var e=[{filename:"component.ts",contents:{raw:n("RYs5"),highlighted:n("WGbo")}},{filename:"custom-date-formatter.provider.ts",contents:{raw:n("B3Jj"),highlighted:n("lJEf")}},{filename:"template.html",contents:{raw:n("xuKC"),highlighted:n("x1EW")}},{filename:"module.ts",contents:{raw:n("z4+0"),highlighted:n("ovKX")}}]},B3Jj:function(a,s){a.exports="import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';\nimport { DatePipe } from '@angular/common';\n\nexport class CustomDateFormatter extends CalendarDateFormatter {\n  // you can override any of the methods defined in the parent class\n\n  public monthViewColumnHeader({ date, locale }: DateFormatterParams): string {\n    return new DatePipe(locale).transform(date, 'EEE', locale);\n  }\n\n  public monthViewTitle({ date, locale }: DateFormatterParams): string {\n    return new DatePipe(locale).transform(date, 'MMM y', locale);\n  }\n\n  public weekViewColumnHeader({ date, locale }: DateFormatterParams): string {\n    return new DatePipe(locale).transform(date, 'EEE', locale);\n  }\n\n  public dayViewHour({ date, locale }: DateFormatterParams): string {\n    return new DatePipe(locale).transform(date, 'HH:mm', locale);\n  }\n}\n"},RYs5:function(a,s){a.exports="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent, CalendarDateFormatter } from 'angular-calendar';\nimport { CustomDateFormatter } from './custom-date-formatter.provider';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n  providers: [\n    {\n      provide: CalendarDateFormatter,\n      useClass: CustomDateFormatter\n    }\n  ]\n})\nexport class DemoComponent {\n  view: string = 'month';\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [];\n}\n"},WGbo:function(a,s){a.exports='<span class="hljs-keyword">import</span> { Component, ChangeDetectionStrategy } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CalendarEvent, CalendarDateFormatter } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { CustomDateFormatter } from <span class="hljs-string">\'./custom-date-formatter.provider\'</span>;\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'template.html\'</span>,\n  providers: [\n    {\n      provide: CalendarDateFormatter,\n      useClass: CustomDateFormatter\n    }\n  ]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  view: <span class="hljs-built_in">string</span> = <span class="hljs-string">\'month\'</span>;\n\n  viewDate: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  events: CalendarEvent[] = [];\n}\n'},lJEf:function(a,s){a.exports='<span class="hljs-keyword">import</span> { CalendarDateFormatter, DateFormatterParams } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DatePipe } from <span class="hljs-string">\'@angular/common\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> CustomDateFormatter extends CalendarDateFormatter {\n  <span class="hljs-comment">// you can override any of the methods defined in the parent class</span>\n\n  <span class="hljs-keyword">public</span> monthViewColumnHeader({ date, locale }: DateFormatterParams): <span class="hljs-built_in">string</span> {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> DatePipe(locale).transform(date, <span class="hljs-string">\'EEE\'</span>, locale);\n  }\n\n  <span class="hljs-keyword">public</span> monthViewTitle({ date, locale }: DateFormatterParams): <span class="hljs-built_in">string</span> {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> DatePipe(locale).transform(date, <span class="hljs-string">\'MMM y\'</span>, locale);\n  }\n\n  <span class="hljs-keyword">public</span> weekViewColumnHeader({ date, locale }: DateFormatterParams): <span class="hljs-built_in">string</span> {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> DatePipe(locale).transform(date, <span class="hljs-string">\'EEE\'</span>, locale);\n  }\n\n  <span class="hljs-keyword">public</span> dayViewHour({ date, locale }: DateFormatterParams): <span class="hljs-built_in">string</span> {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> DatePipe(locale).transform(date, <span class="hljs-string">\'HH:mm\'</span>, locale);\n  }\n}\n'},ovKX:function(a,s){a.exports='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> { CalendarModule, DateAdapter } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n<span class="hljs-keyword">import</span> { adapterFactory } from <span class="hljs-string">\'angular-calendar/date-adapters/date-fns\'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'},x1EW:function(a,s){a.exports='<span class="hljs-tag">&lt;<span class="hljs-title">mwl-demo-utils-calendar-header</span>\n  [(<span class="hljs-attribute">view</span>)]=<span class="hljs-value">"view"</span>\n  [(<span class="hljs-attribute">viewDate</span>)]=<span class="hljs-value">"viewDate"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">div</span> [<span class="hljs-attribute">ngSwitch</span>]=<span class="hljs-value">"view"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-month-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'month\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-month-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-week-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'week\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-week-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-day-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'day\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-day-view</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>'},xuKC:function(a,s){a.exports='<mwl-demo-utils-calendar-header\n  [(view)]="view"\n  [(viewDate)]="viewDate">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]="view">\n  <mwl-calendar-month-view\n    *ngSwitchCase="\'month\'"\n    [viewDate]="viewDate"\n    [events]="events">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase="\'week\'"\n    [viewDate]="viewDate"\n    [events]="events">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase="\'day\'"\n    [viewDate]="viewDate"\n    [events]="events">\n  </mwl-calendar-day-view>\n</div>'},"z4+0":function(a,s){a.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"}}]);