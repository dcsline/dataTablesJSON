dataTables JSON sample without Ajax
=================

Intro
--------------

The dataTables example shows how to use Json data as a data source (analogous to database handling).

The example uses

  * Express
  * Socket.io
  * JQuery
  * dataTables


## Read the Json data

The example data comes from the examples from Jasperreport.
A MySQL database was built from this data. Then the Orders table was exported as Json, thus forming a good database.

Extract from index.js

```` const file = './orders.json';
    jsonfile.readFile (file)
      .then (contents => {
         ..... instruction for further processing
      })
      .catch (error => console.error (error)) ````

The data read is then processed within the html page (analogous to the procedure when using databases as a data source).

## Additional filters DatePicker DateRange

The example also contains a solution for filtering the values ​​of a column using two DatePicker values ​​(DateRange) based on jherax's filterArray.js .
