
 
CREATE TABLE customers (customer_id integer primary key, Name varchar(20), Email varchar(20) )
INSERT INTO TABLE customers(customer_id, Name, Email) VALUES(
		(1, 'ravi', 'ravi@oyelabs.com'),
        (2, 'raju', 'raju@oyelabs.com'),
        (3, 'ram', 'ram@oyelabs.com'));
*****/


INSERT INTO customers (customer_id,Name,Email) VALUES (
  '1',
  'ravi',
  'ravi@oyelabs.com'
); SELECT * FROM customers;

INSERT INTO customers (customer_id,Name,Email) VALUES (
  '2',
  'krishan',
  'krishan@oyelabs.com'
); SELECT * FROM customers;

INSERT INTO customers (customer_id,Name,Email) VALUES (
  '3',
  'sameer',
  'sameer123@gmail.com'
); SELECT * FROM customers;

--- SubjectTable
CREATE TABLE subjects (
  subject_id PRIMARY KEY ,
  subject_name varchar(10)
  );

INSERT INTO subjects (subject_id,subject_name) VALUES (
  '1',
  'English'
); SELECT * FROM subjects;

INSERT INTO subjects (subject_id,subject_name) VALUES (
  '2',
  'Hindi'
); SELECT * FROM subjects;

INSERT INTO subjects (subject_id,subject_name) VALUES (
  '3',
  'Maths'
); SELECT * FROM subjects;


--- mapping table
CREATE TABLE subjectsStudent (
  mapping_id PRIMARY KEY ,
  customer_id Integer,
  subject_id Integer
  );


INSERT INTO subjectsStudent (mapping_id,customer_id,subject_id) VALUES (
  '1',
  '1',
  '1'
); 
INSERT INTO subjectsStudent (mapping_id,customer_id,subject_id) VALUES (
  '2',
  '1',
  '2'
);
INSERT INTO subjectsStudent (mapping_id,customer_id,subject_id) VALUES (
  '3',
  '1',
  '3'
); SELECT * FROM subjectsStudent;

INSERT INTO subjectsStudent (mapping_id,customer_id,subject_id) VALUES (
  '4',
  '2',
  '1'
); SELECT * FROM subjectsStudent;

INSERT INTO subjectsStudent (mapping_id,customer_id,subject_id) VALUES (
  '5',
  '3',
  '3'
); SELECT * FROM subjectsStudent;

INSERT INTO subjectsStudent (mapping_id,customer_id,subject_id) VALUES (
  '6',
  '3',
  '1'
); SELECT * FROM subjectsStudent;


--- QUERY -----------

SELECT customers.customer_id,customers.name,
GROUP_CONCAT(subjects.subject_name, ',') As subjects
FROM
(
  customers INNER JOIN subjectStudent ON customers.customer_id = subjectStudent.customer_id
  ) as T Inner JOIN subjects on T.subject_id = subjects.subject_id
  GROUP BY customers.customer_id ORDER BY subjects.subject_name ASC;