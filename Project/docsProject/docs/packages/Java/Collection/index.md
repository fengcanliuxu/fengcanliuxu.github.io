---
prev: false
next: false
---
# 集合

迭代器

```java
ArrayList<String> list = new ArrayList<>();
Interator<String> it = list.interator();
while(it.next()){
  it.remove() // 不会存在问题
  list.remove() // 当前报错并发删除异常
}
```

增强 for

```java
for(string name: list){
}
```

lambda 表达式

```java
list.forEach(new Consumer<String>(){
  @override
  public void accept(String s){}
})

list.forEach(s -> Sout(s))
list.forEach(Syustem.out::println)
```

## Collection

::: info

单列集合

:::

* isEmpty()
* remove()
* contains()
* toArray()
* clear()

### List

::: info

添加元素 有序 可重复 有索引

:::

*独有方法*

1. add(index, item)
2. set(index, item)

```java
// for 循环
for(let i = 0;i < list.length; i++){
}
```

#### ArrayList

::: warning

基于数组实现， 默认为 0，新增第一次长度为 10，之后扩容 1.5 倍

1. 查询速度快 --- 根据索引查找数据快
2. 删除效率低
3. 添加效率极低

:::

*独有方法*

* add(index, item)
* set(index, item)

#### LinkedList

::: warning

基于双链表实现

1. 查询比较慢 从头开始

:::

*独有方法*

1. addFIrst
2. addLast
3. getFirst
4. getLast
5. removeFirst
6. removeLast

### Set

::: info

无序 不重复 无索引

:::


集合去重 重写 equals 和 hashcode


#### HashSet

##### LinkedHashSet

> 有序

#### TreeSet 按照大小默认升序排序

> 按照大小默认升序排序

## Map

::: info

多列集合

:::

::: warning

key 不能重复

value 可以重复

:::

通用方法：

1. put
2. size
3. clear
4. isEmpty
5. get
6. remove
7. constainsKey
8. constainsValue
9. keySet 获取键
10. values 获取值
11. entrySet 获取键值流

### HashMap

*无序 不重复 无索引 底层时 哈希表结构*

**增删改查性能比较好**

#### LinkedHashMap

*有序*

### TreeMap

*不重复 无索引 可排序 只能对键排序*

**基于红黑树**

###
