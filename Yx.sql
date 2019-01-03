SET NAMES UTF8;
DROP DATABASE IF EXISTS yx;
CREATE DATABASE yx CHARSET=UTF8;
USE yx;

/**用户信息**/
CREATE TABLE yx_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  pwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  gender INT
);
INSERT INTO yx_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', '1'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569',  '1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', '0');