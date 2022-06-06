### Learning objectives:

- Relational databases.
- Keys and unique values.
- Planning a database.
- Creating tables.
- Defining relationships.
- Normalization and denormalization.
- Writing queries.
- Sorting results.
- Joining tables.
- Modifying data.

---

### Course Notes.

- **A database** is a structure that stores information in an organized, consistent, reliable, and searchable way.

- **A DBMS** is the software, like SQL Server, MySQL, or Access we use to interact with the database.

- **Graph databases** like Neo4j, **Object databases** like Realm and Objectivity/DB, and **Document databases** like CouchDB and MongoDB.

- There are three general kinds of relationships to use with databases, **one to many, many to many, and one to one.**

- **A relationship** connects two pieces of data in different **tables** in the same **database**.

- **A relationship** is a way in which information in one table connects to the information in another table.

- **A relation** is a set of attributes (columns) that describe information about specific instances (rows) of an entity.

- **SQL “Structured Query Language”** is the most common language interacting with relational databases.

- **A transaction** is a collection of steps that must all be completed in order for a change to be made to the database.

- **Relationships** are how the tables and records are connected to each other.

  - **One-to-many**: connects one piece of data, one row of a table to one or more other pieces of data.
  - **Many-to-many**: connects more than one thing with more than one other thing.
  - **One-to-one**: connects only one row with only one other row.

- **Normalization** rules help us to reduce redundancy and improve the integrity of our data.

  - **First normal form (1NF):** values in each cell should be atomic and tables have no repeating groups.
  - **Second normal form (2NF):** no values in our table should depend only on part of a key that can be used to uniquely identify a row.
  - **Third normal form (3NF):** values shouldn't be stored if they can be calculated from another non-key field.

- **Denormalization** is a process of intentionally duplicating information in a table, in violation of normalization rules.

- **The desktop database** is used for smaller solutions and hosted on workstations **like** Microsoft Access and FileMaker Pro.

- **Enterprise database** is used by a large number of people and services millions of interactions **like** SAP HANA, Oracle, and Microsoft SQL Server.

- **SQLite** can be great for mobile applications.

- **NoSQL Database** can be just a collection of unstructured data to key-value pairs to graphs like the Facebook social graph to objects, geographic data points, and streams of information, like posts and comments on social media websites.

- **MySQL and MariaDB** can also be used for thousands of clients.

---

**Course Link:** [Programming Foundations: Databases](https://www.linkedin.com/learning/programming-foundations-databases-2/why-use-a-database)

**Certificate:**

<p align="center">
  <img  src="https://imagizer.imageshack.com/img923/4162/aF4zvA.png" width="700">
</p>
