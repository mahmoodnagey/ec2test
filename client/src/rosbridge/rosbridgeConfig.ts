const Config = {
    //-------------------------Connection---------------------------------------//
      // ROSBRIDGE_SERVER_IP: "localhost",
      // ROSBRIDGE_SERVER_IP: "192.168.1.52", // Abdelrahman device ip address
      ROSBRIDGE_SERVER_IP: "abdxi", //vpn server ip
      ROSBRIDGE_SERVER_PORT: "9090",
      RECONNECTION_TIMER: 3000,
      
    //-------------------------Topics---------------------------------------//
      BATTERY_TOPIC: {name: "/my_topic", messageType: "geometry_msgs/Twist"},
      MOTOR_TOPIC: {name: "/my_topic", messageType: "geometry_msgs/Twist"},
      GPS_TOPIC: {name: "/my_topic", messageType: "geometry_msgs/Twist"},
      IMU_TOPIC: {name: "/my_topic", messageType: "geometry_msgs/Twist"},
      CAMERA_TOPIC: {name: "/my_topic", messageType: "geometry_msgs/Twist"},
      SEALANT_TEMPERATURE_TOPIC: {name: "/my_topic", messageType: "geometry_msgs/Twist"},
      BLOWER_TOPIC: {name: "/my_topic", messageType: "geometry_msgs/Twist"},
      SEALANT_WEIGHT_TOPIC: {name: "/my_topic", messageType: "geometry_msgs/Twist"},
      LIGHT_SYSTEM_TOPIC: {name: "/my_topic", messageType: "geometry_msgs/Twist"},
      DEPTH_CAMERA_TOPIC: {name: "/my_topic", messageType: "geometry_msgs/Twist"},
      
    //-------------------------Services---------------------------------------//
      START_ROBOSEALER_SERVICE: {name: "start", type: "std_srvs/Empty"}
      
    };
    
    export default Config;