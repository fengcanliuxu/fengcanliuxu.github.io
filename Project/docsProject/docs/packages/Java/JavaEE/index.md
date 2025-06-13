---
next: JavaEE
---
# JavaEE

**Java 基础部分**

### Stream 流

操作集合和数组

```java
List<String> list = new ArrayList();
list.add();

// 对 list 进行筛选
list.stream().filter(s -> s.startsWidth());
```

::: info list 获取流

```java
Collection<String> list = new ArrayList();
Stream<String> s1 = list.stream();
```

:::

::: info map 获取流

```java
Map<String, Integer> map = new HashMap<>();
Stream<String> ks1 = map.keySet().stream();
```

:::

::: info 数组 获取流

```java
String[] names = {};
Stream<String> as1 = Arrays.stream(names);
String<String> as2 = Stream.of(names);
```

:::

**常见方法**


## 线程

```java
class MyThread extends hread {
  // 声明线程执行
  @Override
  public void run(){}
}
```

执行

```java
class Test {
  public static void main(String[] args){
    Thread t = new MyThread()
    t.start(); // 并发执行
    t.run(); // 单线程执行
  
  }
}
```


### 匿名内部类

```java
new Thread(new Runable(){
  @override
  public void run(){
  
  }
}).start();

new Thread(() -> {
  
}).start();
```


实现 CallAble 接口


```java
class MyCallable implements Callable<String> {
}

Callable<String> call = new MyCallAble();
// 获取线程执行后的结果
FutureTask<String> task = new FutureTask<>(call);

Thread t2 = new Thread(task);
t2.start();

task.get(); // 阻塞
```


获取线程名称

```java
Thread m =  Thread.currentThread();
m.getName();
```


.join() 方法， 子线程强制先执行


**线程安全**

同时消耗资源， 导致资源重复使用。


线程同步

1. 同步代码块

   synchronize("唯一对象"){}
2. 加锁



线程通信
























```
