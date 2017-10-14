import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, AfterViewInit, AfterViewChecked {

  constructor() {
  }

  ngOnInit() {
  }

  greeting(name: string) {
    console.log("Child1Component 执行 greeting 方法输出：" + name);
  }


  ngAfterViewInit(): void {
    console.log('子组件的视图初始化完毕');
  }

  ngAfterViewChecked(): void {
    console.log('子组件的视图检查完毕');
  }
}
