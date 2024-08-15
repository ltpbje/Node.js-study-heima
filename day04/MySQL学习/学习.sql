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
-- select * from users
-- 注意：对初学者来说，经常忘记提供WHEREE条件，
--    从而导致误删整张表的数据！一定要慎重！
-- delete from users where id =4
-- select * from users

-- 演示where子句的使用
-- select * from users where status =1 
-- select * from users where id >=2
-- select * from users where username<>'ls'
-- select * from users where username != 'ls'

-- 使用AND来显示所有状态为0且id小于3的用户
-- select * from users where status = 0 and id < 3

--  使用 or 来显示所有状态为 1 或 username 为zs的用户
-- select * from  users where status=1 or username ='zs'

-- 对users表中的数据，按照status字段进行升序排序
-- select * from  users order by status 

--  按照id对结果进行降序的排序 desc表示降序排序 asc表示升序排序 (默认情况下，就是升序排序的）
-- select * from users order by id desc;
-- select * from users order by id asc;

-- 对users表中的数据，先按照status进行降序排序，再按照username字母的顺序，进行升序的排序
-- select * from users order by status desc ,username asc
