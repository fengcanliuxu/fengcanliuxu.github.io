# 面向对象

Java 基本原则面向对象。

1. 封装
2. 继承
3. 多态

## 匿名内部类

```Java
// 定义一个抽象类
abstract class Animal {
  public abstract void cry();
}

// 直接使用
Animal ani = new Animal(); // 报错

// 匿名内部类使用
Animal ani = new Animal(){
  @Override
  public void cry(){
    System.out.println("这是叫声");
  }
}

ani.cry();
```
