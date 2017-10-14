import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit,
  ViewChild
} from '@angular/core';
import { Child1Component } from "./child1/child1.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked,
  AfterContentInit, AfterContentChecked {
  title = 'app';

  greeting: string = "hello";

  user: { name: string } = { name: "Tom" };

  @ViewChild("child1")
  child: Child1Component;

  htmlDiv: string = "<div>innerHtml 属性绑定</div>";

  ngOnInit(): void {
    // setInterval(() => {
    //   this.child.greeting('Tom');
    // }, 5000);
  }


  ngAfterViewInit(): void {
    console.log('父组件的视图初始化完毕');
  }

  ngAfterViewChecked(): void {
    console.log('父组件的视图初始化完毕');
  }


  ngAfterContentInit(): void {
    console.log('父组件投影内容初始化完毕');
  }

  ngAfterContentChecked(): void {
    console.log('父组件投影内容初始化完毕');
  }
}
