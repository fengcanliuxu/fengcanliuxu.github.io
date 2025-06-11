---
prev: false
next: false
---
# 常用 API

1. equals

   * 判断两个对象地址是否相同
   * 可以直接用 ==
2. toString

   * 默认获取当前对象的地址
     * 用于重写展示
3. getClass()

   * 获取当前对象类
4. StringBuilder

   * 拼接字符串 效率别当前 += 速度快
   * StringBuilder().append()
   * 使用 toString 转换为对应的 String
5. StringBuffer

   * 性能安全
6. StringJoiner

   * 生民拼接间隔和首位符号
   * new StringJoiner( ", ", "[" , "]") 间隔符号 开始符号 结束符号
7. Math

   * floor
   * ceil
   * max
   * min
8. Runtime 运行环境(单例)

   * System.currentTimeMillis() // 获取系统的时间毫秒值
9. BigDecimal（string）

   * ::: info BigDecimal.valueof()
   * add
   * substract
   * multiply
   * divide 除数 保留位数 舍入位数
10. 时间

    * localDate
      * LocalDate ld  = LocalDate.now()
      * 年月日
    * localTime
      * 时分秒
    * localDateTime
      * 年月日 时分秒
    * ZoneId
      * 时区
    * ZonedDateTime
      * 带时区时间

## 数组 Api - Arrays

::: info

toString

copyOfRange start end 包前不包后

copyOf 拷贝数组到一个新数组，返回这个新数组

setAll

sort

:::

## Lambda 简化匿名内部类





### 可变参数

```java
public void test(int ...nums){}
```
