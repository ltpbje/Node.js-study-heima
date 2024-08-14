-- 通过 * 把 users 表中所有的数据查询出来
-- select * from users

-- 从users 表中把usernamee和password对应的数据查询出来
-- select username,password from users

-- 向users 表中，插入新数据，username 的值为tony stark  password的值为098123
-- insert into users(username,password) values('tony stark','098123')
-- select * from users

-- 将id为4的用户密码，更新成888888
-- update users set password = '888888' where id = 4
-- select * from users


-- 更新id为2的用户，把用户密码更新为admin123同时，把用户的状态更新为1
-- update users set password='admin123',status = 1 where id =2
select * from users
