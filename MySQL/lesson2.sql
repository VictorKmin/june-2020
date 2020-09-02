SELECT * FROM users u
JOIN cars c ON c.id = u.car_id


SELECT users.nmae AS userNmae,
       c.name AS carName
FROM cars c
         JOIN users ON users.car_id = c.id


SELECT *
FROM ratings r
         JOIN lesson l ON l.id = r.lesson_id
         JOIN students ON students.id = r.student_id
WHERE r.rating = 5
ORDER BY students.age


SELECT COUNT(rating), s.name
FROM ratings r
         JOIN students s on s.id = r.student_id
WHERE r.rating = 5
GROUP BY student_id;

SELECT s.name,
       s.age,
       l.date,
       l.label
FROM students s
         JOIN ratings r on s.id = r.student_id
         JOIN lesson l on r.lesson_id = l.id
WHERE r.rating = 5;


SELECT COUNT(id),
       gender
FROM students
GROUP BY gender;

SELECT COUNT(id) FROM students WHERE gender LIKE 'm%';
SELECT COUNT(id) FROM students WHERE gender LIKE 'f%';

SELECT CONCAT(name, '_', age) FROM students;

DELETE FROM students WHERE gender LIKE 'c%';


SELECT * FROM students WHERE age = 20 OR age = 25 OR age = 30;
SELECT * FROM students WHERE (age = 20 OR age = 25 OR age = 30) AND gender = 'male';
SELECT * FROM students WHERE age IN (20, 25, 30);


SELECT DISTINCT(name) FROM students;
SELECT name FROM students;


SELECT COUNT(name), name
FROM students
GROUP BY name;


SELECT *
FROM students
WHERE name LIKE '[a]%';


SELECT *
FROM students
WHERE id IN (SELECT student_id FROM ratings WHERE rating = 5);

SELECT student_id
FROM ratings
WHERE rating = 5;



SELECT * FROM students LEFT JOIN ratings r on students.id = r.student_id;
SELECT * FROM students RIGHT JOIN ratings r on students.id = r.student_id;


SELECT * FROM workers JOIN depts ON workers.dep_id = depts.id;















