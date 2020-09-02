INSERT INTO doctors (age) VALUES (34);

SELECT * FROM students;

SELECT name, age FROM students;

SELECT * FROM students WHERE age = 15;

SELECT * FROM students WHERE name = 'romAn'

SELECT * FROM students WHERE name LIKE '%n'

SELECT * FROM students WHERE name LIKE '%n%';

SELECT * FROM students WHERE name LIKE '___a%';

SELECT * FROM students WHERE LENGTH(name) = 4;

SELECT * FROM students WHERE name LIKE 'o%' ORDER BY age DESC;

SELECT * FROM students WHERE gender = 'female' ORDER BY name;

SELECT * FROM students ORDER BY age LIMIT 3;

SELECT * FROM students ORDER BY age LIMIT 3 OFFSET 6;

SELECT * FROM students WHERE age <> 18;
SELECT * FROM students WHERE age != 18;

SELECT * FROM students WHERE age <= 18;

SELECT * FROM students WHERE age > 18 AND name LIKE 'o%';

SELECT * FROM students
WHERE age = 18
   OR name
          LIKE 'o%'
          AND gender = 'female';

SELECT * FROM students WHERE age > 20 AND age < 30;

SELECT * FROM students WHERE age BETWEEN 20 AND 30;


SELECT * FROM students WHERE age BETWEEN 20 AND 30 OR name LIKE 'o%';


# AGGREGATE FUNCTIONS

SELECT MAX(age) FROM students;

SELECT MIN(age) FROM students;

SELECT AVG(age) FROM students;

SELECT COUNT(id) FROM ratings WHERE rating > 4;

SELECT COUNT(id) FROM students WHERE age < 20;

SELECT SUM(age) FROM students;

SELECT AVG (rating) AS avgRat,
       COUNT(rating) AS gradeCount
FROM ratings
WHERE student_id = 5;


UPDATE students SET name = 'VALENTIN', gender = 'chubaka' WHERE age = 55;

UPDATE students SET age = 20 WHERE age > 40;

DELETE FROM students WHERE gender LIKE 'c%';
