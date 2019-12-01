# JS

---

* JS基础知识     

  * 变量类型和计算

    * 题目

      * typeof能判断哪些类型
      * 何时使用=== 何时使用==
      * 值类型和引用类型的区别
      * 手写深拷贝

    * 知识点

      * 变量类型

        * 值类型和引用类型

          * 值类型

            ```javascript
            // 值类型
            let a = 100;
            let b = a;
            a = 200;
            console.log(b); // 100
            ```

          * 引用类型

            ```javascript
            // 引用类型
            let b = { age: 20};
            let a = b;
            b.age = 21;
            console.log(a.age); // 21
            ```
            
            ``` javascript
            // 常见的值类型
            let a; // undefined
            // 用const定义常量的时候 必须要赋值  不赋值会报错！！！
            const s = 'abc';
            const n = 100;
            const b = true;
            const s = Symbol('s');
            ```
            
            ``` javascript
            const obj = {x:100};
            const arr = {'a','b','c'};
            const n = null;   // 特殊引用类型，指针指向空地址
            function fn() {}
            // 特殊引用类型，但不用于存储数据，所以没有"拷贝、复制函数"这一说
            ```
            
            

        * typeof运算符

          * 作用

            * 识别所有值类型
            * 识别函数
            * 判断是否是引用类型(不可再细分)

          * 举个栗子

            ``` javascript
            // 判断所有值类型
            let a;  typeof a; // 'undefined'
            const str = 'abc'; typeof str; // 'string'
            const n = 100; typeof n; // 'number'
            const b = true; typeof b; // 'boolean'
            const s = Symbol('s'); typeof s; // 'symbol'
            ```

            ``` javascript
            // 能判断函数
            typeof console.log; // 'function'
            typeof function(){}; // 'function'
            ```

            ``` javascript
            // 能识别引用类型(不能再继续识别)
            typeof null; // 'object'
            typeof ['a', 'b']; // 'object'
            typeof {x: 100}; // 'object'
            ```

        * 深拷贝

          *  **深拷贝不会拷贝引用类型的引用，而是将引用类型的值全部拷贝一份，形成一个新的引用类型，这样就不会发生引用错乱的问题，使得我们可以多次使用同样的数据，而不用担心数据之间会起冲突** 

          * 当obj2中的属性发生变化时，obj1的属性不变

          * 深拷贝有三种方式

            * '乞丐版'深拷贝->`JSON.stringify()以及JSON.parse()`

              * 称之为乞丐版是因为`JSON.stringify()以及JSON.parse()`是不可以拷贝undefined、function、RegExp等类型

                ``` javascript
                const obj1 = {
                    age: 20,
                    name: 'xxx',
                    address: {
                        city: 'beijing'
                    },
                    arr: ['a', 'b', 'c'],
                };
                const objString = JSON.stringify(obj1);
                const object = JSON.parse(objString);
                obj1.address.city = 'shenzhen';
                console.log(object.address.city); // beijing
                ```

                

            * `Object.assign(target,source)`

              * 如果属性多层嵌套的话，还是没卵用

              * 实测 无论是数组或者是对象 都会深拷贝失败

                ``` javascript
                const obj1 = {
                    age: 20,
                    name: 'xxx',
                    address: {
                        city: 'beijing'
                    },
                    arr: ['a', 'b', 'c'],
                };
                
                const object = Object.assign({}, obj1);
                obj1.name = 'zhangsan';
                console.log(object.name);   // xxxx
                
                obj1.address.city = 'shenzhen';
                console.log(object.address.city); // shenzhen
                ```

                

            * 递归方法

          ``` javascript
          /**
           * 深拷贝
           * @param {Object} obj   要拷贝的对象 
           */
          function deepClone(obj = {}) {
          
              if (typeof obj !== 'object' || obj == null) {
                  //  obj是null ，或者不是对象和数组  直接返回
                  return obj;
              }
          
              //  初始化返回结果
              let result;
              if (obj instanceof Array) {
                  result = [];
              } else {
                  result = {};
              }
              for (let key in obj) {
                  //  保证key不是原型的属性
                  if (obj.hasOwnProperty(key)) {
                      // 递归调用
                      result[key] = deepClone(obj[key]);
                  }
              }
              //  返回结果
              return result;
          }
          ```

      * 变量计算

        * 类型转换

          * 字符串拼接

            ``` javascript
            const a = 100 + 10; // 110
            const b = 100 + '10'; // '10010'
            const c = true + '10'; // 'true10'
            ```

          * ==

            ``` javascript
            100 == '100' // true
            0 == '' // true
            0 == false // true
            false == '' // true
            null == undefind // true
            ```

            * `==` 尽量让值转换之后相等

            * 只有一个地方用 `==`

              ``` javascript
              // 除了 == null 之外，其他一律用 === ，例如
              const obj = {x: 100};
              if (obj.a == null){}
              // 相当于
              // if (obj.a === null || obj.a === undefine) {}
              ```

              

          * if语句和逻辑运算

            * truly变量: `!!a === true`的变量

            * falsely变量: `!!a === false` 的变量

              ``` javascript
              // 以下是 falsely 变量，除此以外都是 truly 变量
              !!0 === false;
              !!NaN === false;
              !!'' === false;
              !!null === false;
              !!undefined === false;
              !!false === false;
              ```

              * 请注意 if语句判断的是 truly变量 、 false类变量  并不是判断 true false

              * 逻辑判断

                ``` javascript
                console.log(10 && 0); // 0
                console.log('' || 'abc'); // 'abc'
                console.log(!window.abc); // true
                ```

                

    * 解答

      1. typeof能识别哪些值类型？

         1. 识别所有值类型
         2. 识别函数
         3. 判断是否是引用类型(不可在细分)

      2. 何时使用 `===` 何时使用 `==`

         ![image-20191201215719411](C:\Users\zhang\Desktop\学习总结\markdown\image-20191201215719411.png) 

      3. 值类型和引用类型的区别

         ​	![image-20191201215920263](C:\Users\zhang\Desktop\学习总结\markdown\image-20191201215920263.png)

      4. 手写深拷贝

         1. 注意判断值类型和引用类型
         2. 注意判断是数组还是对象
         3. 递归

         

  * ··

* JS Web API

* 开发环境

* 运行环境