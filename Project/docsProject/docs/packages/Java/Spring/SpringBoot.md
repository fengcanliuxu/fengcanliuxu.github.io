---
next: false
prev: false
---
# Spring Boot

### 入口

```java
@SpringBootApplication 
public class Project {
  public static void main(String[] args){
    SpringBootApplication.run(Project.class, args)
  }
}
```

:::warning

必须配置 @ComponentScan, 默认扫描当前包和对应子包下面。

:::



注解

**@SpringBootApplication**

```java
SpringApplication.run( 入口类.class )
```

### Controller

**@RestController**

:::info

*当前是一个请求处理类*

相当于是

@Controller

@ResponseBody

:::

:::info @PostMapping('/path')

post 请求

:::

:::info @GetMapping('/path')

get请求

:::

:::info @Component

将类直接交给 IOC 管理

声明 bean 的基础注解

:::

:::info @Autowired

直接注入 service, 自动寻找 bean  对象， 为变量赋值，依赖注入 DI 的实现。

:::


::: info @Qualifier("")

 根据 bean 名字注入 和 autoWired 配合使用

:::

:::info @Resource(name = "")

根据 bean 名字注入

:::


::: @Primary

提高 bean 的权重

:::






## service

:::info @Service(value,“当前Bean名称”)

Component 衍生注解 业务层

:::

:::warning @Repository

Component 衍生注解， 标注在数据方位层

用的少

:::
