# css3
---

* css3做3d
  * 陀螺仪
    * deviceorientation 
      * 设备的物理方向信息，表示为一系列本地坐标系的旋角
    * devicemotion 
      * 提供设备的加速信息
    * compassneedscalibration
      * 用于通知wev站点使用罗盘信息校准上述事件

      ```
        window.addEventListener("deviceorientation",function(event){
            // 处理event.alpha\event.beta及event.gamma
        },true);
      ```
    * 获取旋转角度
      * z轴为轴，alpha的作用域为(0,360)
      * x轴为轴, beta的作用域为(-180,180)
      * y轴为轴, gamma的作用域为(-90,90)
    * 获取罗盘校准
      ```
        window.addEventListener("compassneedscalibration",function(event){
            alert("您的罗盘需要校准");
            event.preventDefault();
        },true);
      ```  
    * 获取重力加速度
      ```
        window.addEventListener("devicemotion",function(event){
            // 处理event.acceleration
            //x(y,z): 设备在x(y,z)方向上的移动加速的值
            // event.accelerationIncludingGravity
            //考虑了重力加速度后设备在x(y,z)
            // event.rotationRate
            // alaph,beta,gamma: 设备绕x,y,z轴旋转的角度
        },true);
      ```  
    * 摇一摇触发代码
      ```
        var speed = 30;
        var x = y = z = lastX = lastY = lastZ = 0
        function deviceMotionHandler(eventData) {
            var acceleration = event.accelerationIncludingGravity;
            x = acceleration.x;
            y = acceleration.y;
            z = acceleration.z;
            if(Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed || Math.abs(z-lastZ) > speed ){
                // 简单的摇一摇触发代码
                alert(1);
            }
        }
      ```   
    * css3D模型   