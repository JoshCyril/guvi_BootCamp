# API Task

## API Call  

   - Load the rest countries' data using your HTML and script.js file and run a for loop on the data and print all the country names in the console.
      > [✔ View Full File]()
    
      > [🔽 Snippet Code Below](#rest-countries-api)
## Blog Write-up

   - Give a write-up on the Difference between copy by value and copy by reference. [✔ Link]()

   - How to copy by value a composite datatype (array+objects). [✔ Link]()

---
   ## Rest countries' API
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
   
   ![image](Rest%20Country/output.png)
