---
prev: false
next: false
---
# 面向对象

Java 基本原则面向对象。

1. 封装
2. 继承
3. 多态


## 多态

向上转型

*子类转换为父类*

隐藏自身方法

向下转型

父类转换为子类

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

## 枚举 Enum

```java
enum myEnum {
  x,y
}
```

## 泛型

```java
public interface Data<R> {
  void add(T, t);
  void delete(T, t);
  void update(T, t);
}

// 动态泛型
class Car{}
class dian extends Car{}
class you extends Car{}
// extends car 的子类 
// super car 的父类
ArrayList<? extends car> arr = new ArrayList<>()
```

## 包装类

1. 自动装箱

```java
Integer i1 = 10;
// integer 常量范围 -128 - 127 直接缓存
```

2. 自动拆箱

## Lambda 简化匿名内部类

::: info

不能简化所有匿名内部类的代码，只能简化函数式接口的匿名内部类

@FunctionalInterface 函数式编程标准注解

静态方法引用

类名：：静态方法名字

:::

> [!TIP] 可以省略参数类型

::: warning

函数式接口： 有且只有一个抽象方法的接口

:::

```java
interface Swimming {
  void swin()
}
Swimming s1 = new Swimming(){
  @Override
  public void swim(){
  }
}

Swimming s2 = () -> {
  System.out.println()
}
```

::: info 静态方法引用

如果 lamabda 当中只有一个静态方法

类名:: 静态方法名字

:::

::: info 实例对象引用

new Test2()::实例方法

:::

::: info 特定类型的方法引用

如果 lambda 表达式里只是掉用一个实例方法， 并且前面参数列表中的第一个参数时为最方法的主调， 后面的所有参数都是作为该实例方法的入参的， 则此时就可以使用特定类型的方法引用

Arrays.sort(names, String::compareToIgnoreCase)

:::

::: info 构造器引用

类名::new

如果某个Lambda表达式里只是在创建对象，并且前后参数情况一致，就可以使用构造器引用

:::
