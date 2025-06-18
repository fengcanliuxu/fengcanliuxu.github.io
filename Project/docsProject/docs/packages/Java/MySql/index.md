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
