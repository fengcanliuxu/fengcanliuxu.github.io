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

## Controller

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

:::info @Primary

提高 bean 的权重

:::

::: info 接收参数

```java

@DeleteMapping("/path")
public Object delete(HttpServletRequest request){
  String key = request.getParameter(key);
  return Result.success();
}

@DeleteMapping("/path")
// 添加之后， 必选
public Object delete(@RequestParam("id") Integer deptId){
// 名称相同
public Object delete(Integer deptId){
// 非必选
public Object delete(@RequestParam(value = "id", required = false) Integer deptId){
  deptId;
  return Result.success();
}

// 获取当前请求json
// POST 请求
@RequestBody Dept dept
// Get 请求
@GetMapping("/path/{id}")
@PathVariable Integer id

@DateTimeFormat(patten = 'yyyy-MM-dd') LocalDate begin


```

:::

## service

:::info @Service(value,“当前Bean名称”)

Component 衍生注解 业务层

:::

:::warning @Repository

Component 衍生注解， 标注在数据方位层

用的少

:::

**@Transactional 开启事务**

加在方法 类 上面

params

1. (rollbackFor = {expection.class}) 默认只能处理运行时异常

**propagation 事务传播行为**

当前一个事务被另一个事务方法调用时，这个事务方法如何进行事务控制。

1. Propagation.REQUIRED 需要事务，有则加入，无则创建新事务 -- 默认
2. Propagation.REQUIRES_NEW 需要新事务，无论有无，总是创建新事务

文件上传

参数类型：@RequestParam("file")  MultipleFile image

将文件保存到本地

```java
String originalFilename = file.getOriginalFilename(); // 获取原始文件名称

file.transferTo(new File("path"));

// 单个文件
spring.servlet.multipart.max-file = 10MB
// 文件最大
spring.servlet.multipart.max-request-file = 10MB
 
```

## 参数配置

application.properties

```java
@Value("${}") // 获取当前配置中变量
@ConfigurationProperties(prefix = "前缀") // 前缀 - 当前配置当中 最后一个 . 之前的
```

## 全局异常处理

```java
@RestControllerAdvice
public class GobaLExceptionHandler {
  @ExceptionHandler(Exception.class) // 处理执行何种异常
  public Result doException(Expection ex){
    return Result.error();
  
  }
}
```


## 过滤器


```java
@WebFilter(urlPatterns = "/*")
public class DemoFilter implements Filter {
// 初始化方法
  @Override
  public void init(FilterConfig filterConfig) throws ServletException{
  }
  
 // 拦截到请求 调用该方法
@Override
  public void doFilter(ServletRequest servletRequest,ServletResponse servletResponse, FilterChain chain)throws Exception{
  // 发行
  chain.doFilter(servletRequest, servletResponse)
}

// 销毁方法， 每次正常关闭触发
  public void destroy(){
  
  }

}


// 引导类加上 @ServletComponentScan 开启 servlet 组件支持
@ServletComponentScan
@SpringBootApplication
```



## 日志框架

1. log4j
2. logback 性能更好 springBoot 直接可以使用， 不需要引入依赖
3. slf4j 简单日志门面，提供了一套日志操作标准接口及抽象类

```java
private static final Logger log = LoggerFactory.getLogger(LogTest.class);
```

@slf4j 省略当前的log

## 登录功能

JWT

HEADER + 有效信息 + 签名

header： 记录令牌类型，签名算法

payload：携带一些自定义的信息

signature： 访问被篡改，保证安全行

生成

```java
Map<String, Object> claims = new HashMap<>();
claims.put("id", 10);

Jwts.builder().signWith(SignatureAlgorihtm.H5256,'key')
  .addClaims(claims)
  .setExpiration(LocalDate.getCurrentMilli() + time)
  .compact()
```

解析

```java
Jwts.parse().setSigningKey(pass).parseClaimsJws().getBody();
```

Jwts.builder()
