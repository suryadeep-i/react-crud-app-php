CREATE TABLE users (
   id int(11) NOT NULL AUTO_INCREMENT,
   user_name varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
   user_email varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
   user_moble bigint(10)  COLLATE utf8mb4_unicode_ci NOT NULL,
   user_message varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    PRIMARY KEY (id)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
