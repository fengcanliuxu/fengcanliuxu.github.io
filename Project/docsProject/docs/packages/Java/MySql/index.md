---
prev: false
next: false
---
# Mysql

1. DDL 数据定义语言，定义改变表结构
2. DQL 查询
3. DML 数据增删改
4. DCL 数据控制，用户权限

### DDL

database 可以替换为 schema

```sql
show database;
select database();
use dataName;
create database if not exists test default charset utf8mb4;
drop database if exists test;
```

### JDBC

配置 mysql 驱动

```java
1. 注册驱动
Class.forName("com.mysql.cj.jdbc.driver");

2. 获取连接
Connection connection = DriverManager.getConnection("jdbc:mysql://", "root", pass);

3. 获取sql 语句执行对象
Statement statement = connection.createStatement();

4. 执行sql
statement.executeUpdate(sql);

// 5. 释放资源
statement.close()
connection.close()

```

#### 预编译

1. 防止 sql 注入
2. 提高性能

```java
PrepareStatement ps = connection.prepareStatement("");
ps.setString(); // 设置预编译字符
```

## MyBatis

1. 引入 myBatis 包
2. 创建 Mapper 软件包
3. 创建接口
4. 使用 @Mapper 注解

在 applications.properties 配置myBatis。

Mapper Interface

```java
@Mapper
public interface Mapper{
  @select("select * from table")
  public List<Object> getAll();

}
```

### 数据库连接池

### 通过 xml 配置 Mapper

1. xml 映射文件名称和 mapper 接口名称一致，将 xml 映射文件和 mapper 接口放置在相同包下（同包同名）
2. xml 映射文件的 namespace 和 Mapper 接口名一致
3. xml id 和mapper 接口方法名称一致， 返回值一致

强行扫包

```properties
mybatis.mapper-locaion=classpath:mapper/*.xml
```

接受参数

```java
@Delete("delete from test where id = #{id}")
void test(Integer id);
```

动态sql

```xml
<update id = "test">
  update dept 
  <set> // 优化 ,
    <if test = "">
  
    </if>
 </set>
</update>
```

多表关系

一对多

在数据库表中多的一方，添加字段， 来关联一的一方的主键。

```sql
create table name()
   [constraint] 外键名称 foreign key (外键字段名) references 主表 (字段名)
alter table 表名 add 
  constraint 外键名称 foreign key(外键字段名) references 主表(字段名)
```

直接删除数据会导致脏数据。-- 外键

多对多

一对一

#### 多表查询

直接查询

```sql
select * from a,b;
// 总条数 a.length * b.length;
```

需要消除无效的笛卡尔集合。

**内连接**

查询交集

```sql
// 隐式内连接
select * from a,b where a.id = b.a_id;

// 显示内连接
select * from a inner join b ona.id = b.a_id where ; 
```

**左连接**

*left join*

查询左表所有数据

```sql
select * from a left join b on a.id = b.a_id;
```

**右连接**

*right join*

查询右表所有数据

```sql
select * from a right join b on a.id = b.a_id;
```

分页查询

limit 0， 10；

limit 10， 20；

```java
Integer start = (page - 1) * pageSize;
mapper.page(start, pageSize);
```

#### PageHelper

MyBatis 分页插件，简化分页操作， 提高开发效率

mapper

定义 Mapper 接口的查询方法（无需考虑分页）

```java
// 直接进行查询
@Select("select * from a")
```

service

```java
public PageBean page(Integer page, Integer pageSize){
  pageHelper.startPage(page, pageSize);
  List<Emp> empList = empMapper.list();
  Page p = (Page) empList;
  return new PageBean(empList);
}
```


concat 函数

select concat('hello', 'world');

拼接这两个字符串



#### 事务管理


```sql
// 开启事务
start transction;

commit;
rollback;
```
