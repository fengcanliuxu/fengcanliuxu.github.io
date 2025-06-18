---
prev: false
next: false
---
# 反射

#### 反射原理：

1. 获取class 对象

* Class.class class 具体的类
* Class.forName("全类名") com.wyw.
* new Class.getClass()

#### 获取类的构造器

```java
getDeclareConstructors()  return Constructor[] /

class c1 =  getDeclareConstructors(String.class, int.class)  return Constructor[]

class c1 = (class) cl.newInstance();

// 私有构造器 会报错
c1.setAccessible(true); // 禁用检查权限
```

#### 获取成员变量

````java
class c = Cat.class;
Field[] fields = c.getDeclearedFidlds("key" || null);

field.getType();
field.getName();
````

获取方法对象

```java
class.getDecleardMethods();
method.getName();
method.getParam etCount();
```

创建注解

原理， 内部是一个接口，创建一个对应的匿名内部类 

```java
@Target(ElementType.TYPE) // 声明注解范围
@Retention(RetentionPolicy.RUNTIME) // 注解始终存活
public @interface MyTest3 {}
```
