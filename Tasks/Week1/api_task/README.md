# API Task

## API Call  
  Load the rest countries' data using your HTML and script.js file and run a for loop on the data and print all the country names in the console.
      
   > [✔ View Source File](Rest%20Country)
    
   > [🔽 Code Snippet Below](#rest-countries-api)
   
## Blog Write-up
  Give a write-up on the Difference between copy by value and copy by reference. 
   
   > [✔ Visit Post](https://joshcyril2guvi.blogspot.com/2021/03/copy-by-value-vs-copy-by-reference.html)

## Reference
  How to copy by value a composite datatype (array+objects).
   
   > [🔽 Code Snippet & Explaination]()

---
   ## Rest countries' API
   `https://restcountries.eu/rest/v2/all` HTTP end point
   ```js
   request.onload = function() {

   var data = JSON.parse(this.response)

      for(i=0;i<data.length;i++){
         console.log(data[i].name)
      }
   }
   ```
   > [Read More](Rest%20Country/scripts.js)
   
   ### Output
   
   <img src="Rest%20Country/output.png" width="70%">
   
   
   ## Copy by value a composite data type?
   
   There are **3 ways** to copy by value for composite data types.
   
   
   ### 1. Using the spread `(...)` operator.
   
   >Spread operator allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 values are expected. It allows us the privilege to obtain a list of parameters from an array.Using spread will clone your object. Note this will be a shallow copy.
   ```js
   let A= [1, 2, 3];
   B= [...A];
   
   console.log(A, B) // [1, 2, 3] [1, 2, 3]
   B[1]= 8;
   
   console.log(A, B) // [1, 2, 3] [1, 8, 3]
   ```
    
   ### 2. Using the `Object.assign()` method.
   
   >The `Object.assign()` method copies all enumerable own properties from one or more source objects to a target object. It returns the target object. Note this will be a shallow copy.
   ```js
   let A= [1, 2, 3];
   B= Object.assign([], A);
   
   console.log(A, B) // [1, 2, 3] [1, 2, 3]
   B[1]= 81;
   
   console.log(A, B) // [1, 2, 3] [1, 81, 3]
   ```
    
   ### 3. Using the `JSON.stringify()` and `JSON.parse()` methods.
   
   >The JSON object, available in all modern browsers, has two useful methods to deal with JSON-formatted content: parse and stringify. JSON.parse() takes a JSON string and transforms it into a JavaScript object. JSON.stringify() takes a JavaScript object and transforms it into a JSON string.Using JSON.parse() and JSON.stringify() for copy performs deep copy.
   ```js
   let A= [1, 2, 3];
   B= JSON.parse(JSON.stringify(A));
   
   console.log(A, B) // [1, 2, 3] [1, 2, 3]
   B[1]= 88;
   
   console.log(A, B) // [1, 2, 3] [1, 88, 3]
   ```
