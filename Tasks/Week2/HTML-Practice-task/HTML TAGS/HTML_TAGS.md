## HTML Task to know usage of basic tags.

1. Fix the bugs in below snippet

    ```HTML
        <html lang="en">
        <head>
            <title>Document
                <body>
                    guvi
            </title>
        </head>
    ```

    ```HTML
    <body> <!--Added-->
    ```

    ```HTML
      <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <div>
                <div>
                    Guvi Geek Network
                </div>
            </body>
        </html>
    ```

2. Try the below one

    ```HTML
    <html lang="en">
        <head>
            <title>Document
                <body>
                    guvi
        </head>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <div>
                <div>
                    Guvi Geek Network
                </div>
            </body>
        </html>
    ```    
    > Correct code
      ```html
        <html lang="en">
        <head>
            <title>Document</title> <!--Added title-->
        </head>
        <body> <!--Moved body down-->
              guvi
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <div>
            <div>
                Guvi Geek Network
            </div>
        </body>
        </html>
      ```

---

3. Design a contact us form with all fields as required.

    ```html
    <form>

      <input type="text" name="uname" value="" id="name" required/>
       <label for="Name">Name:</label><br />
      <input type="password" name="pass" id="password" required/>
       <label for="password">Password:</label>Name</label>
      <br />

      <input type="radio" id="male" name="gender" value="M" required>
       <label for="male">👦</label>
      <input type="radio" id="female" name="gender" value="F" required>
       <label for="female">👧</label><br />
      <br />
  
      <input type="checkbox" id="check-a" name="fruit" required>
       <label for="check-a">🍎 Apple</label>
      <br />
      <input type="checkbox" id="check-m" name="fruit">
       <label for="check-m">🥭 Mango</label>
      <br />
      <input type="checkbox" id="check-b" name="fruit">
       <label for="check-b">🍌 Banana</label>
      <br />

      <label for="cars">Choose a car 🚗:</label>  
      <select name="cars" id="cars" required>
        <option value="volvo" selected disabled>-- Select --</option>
        <option value="volvo" >Volvo</option>
        <option value="saab" >Saab</option>
        <option value="mercedes" >Mercedes</option>
        <option value="audi" >audi</option>Audi</option>
      </select><br />

      <br />
      <input type="submit" value="✔ Submit">
      <input type="reset" value="🔄 Reset">
      <br />
    </form>
    ```
    > [Preview](https://htmlpreview.github.io/?https://github.com/JPC8/guvi_BootCamp/blob/main/Tasks/Week2/HTML-Practice-task/form3.html)
---

4. Use certain HTML elements to display the following in a HTML page.

- Programming Language
  - JavaScript
    1. Angular
    2. React
    3. Vue.js
  - Python
    1. Django Framework
    2. Flask Framework
  - Java
    1. Spring
    2. Maven
    3. Hibernate
- Database

  - MySQL
  - MongoDB
  - Cansandra

  ```HTML
  <ul>
    <li>
      Programming Language
      <ul>
        <li>
          JavaScript
          <ol>
            <li>Angular</li>
            <li>React</li>
            <li>Vue.js</li>
          </ol>
        </li>
        <li>
          Python
          <ol>
            <li>Django Framework</li>
            <li>Flask Framework</li>
          </ol>
        </li>
        <li>
          Java
          <ol>
            <li>Spring</li>
            <li>Maven</li>
            <li>Hibernate</li>
          </ol>
        </li>
      </ul>
    </li>
    <li>
      Database
      <ul>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Cansandra</li>
      </ul>
    </li>
  </ul>
  ```

---

5. Create an element that helps you to open the https://google.com in separate new tab.

   ```html
   <a href link="http://google.com" target="newtab"> Google </a>
   ```

---

6. In the form, add two radio buttons with grouping them for employee type(Salaried and own business)

    ```html
    <form>
      <input type="radio" id="salaried" name="employee-type" required />
      <label for="salaried">💰 Salaried</label>
      <input type="radio" id="own-business" name="employee-type" required />
      <label for="own-business">💼 Own Business</label>
    </form>
    ```

---

7. Design form shown in the [Image](http://evc-cit.info/cit040/formguide/card_0.png)

   <img src="http://evc-cit.info/cit040/formguide/card_0.png">
   <img src="https://github.com/JPC8/guvi_BootCamp/blob/main/Tasks/Week2/HTML-Practice-task/mag-O-zine_output.png" width="41%">

   
   ```html
    <div class="magozin-form">
        <table class="table-style">
            <thead>
                <th colspan="6">Yes! I want to subscribe to <mag-head>Mag-O-Zine</mag-head></th>
            </thead>
            <tbody>
                <tr>
                    <td colspan="3"><input type="text" value="Joe" class="input-font"></td>
                    <td colspan="3"><input type="text" value="Schmegeggie" class="input-font"></td>
                </tr>
                <tr>
                    <td colspan="3">First Name</td>
                    <td colspan="3">First Name</td>
                </tr>
                <tr>
                    <td colspan="6"><input type="text" value="1001 Washington Street" class="input-font"></td>
                </tr>
                <tr>
                    <td colspan="6">Address</td>
                </tr>
                <tr>
                    <td colspan="2"><input type="text" value="Antown" class="input-font"></td>
                    <td colspan="2"><input type="text" value="CA" class="input-font"></td>
                    <td colspan="2"><input type="number" value="99999" class="input-font" maxlength="6"></td>
                </tr>
                <tr>
                    <td colspan="2">City</td>
                    <td colspan="2">State</td>
                    <td colspan="2">Zip</td>
                </tr>
                <tr>
                    <td colspan="6" class="bottom-text">Subscribe for: <input type="checkbox"> 1 year ($19.95) <input type="checkbox"> 2 years ($35.00)</td>
                </tr>
                <tr>
                    <td colspan="6" class="bottom-text">Send me more information about:</td>
                </tr>
                <tr>
                    <td colspan="6" class="bottom-text"><input type="checkbox"> Computer-Zine</td>
                </tr>
                <tr>
                    <td colspan="6" class="bottom-text"><input type="checkbox"> Fishing-Zine</td>
                </tr>
                <tr>
                    <td colspan="6" class="bottom-text"><input type="checkbox"> Cat-O-Zine</td>
                </tr>
            </tbody>
        </table>
     </div>
    ```
   >[Read More](magozine.html)
   
   >[Preview](https://htmlpreview.github.io/?https://github.com/JPC8/guvi_BootCamp/blob/main/Tasks/Week2/HTML-Practice-task/magozine.html)

---

8. Use the table tag to design given [Image](https://www.bapugraphics.com/assets/img/port_upload_dir/table-4.jpg).

   <img src="https://www.bapugraphics.com/assets/img/port_upload_dir/table-4.jpg">

    ```html
    <table>
      <thead>
        <th rowspan="2">State of health</th>
        <th colspan="2">Fasting Value</th>
        <th>After Remainng</th>
        <tr>
          <td>Fasting</td>
          <td>Normal</td>
          <td>Level</td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Healthy</td>
          <td>70</td>
          <td>100</td>
          <td>less than 140</td>
        </tr>
        <tr>
          <td>Pre- Diabetes</td>
          <td>101</td>
          <td>126</td>
          <td>140 to 200</td>
        </tr>
        <tr>
          <td>Diabetes</td>
          <td>more than 126</td>
          <td>Not Applicable</td>
          <td>More than 200</td>
        </tr>
      </tbody>
    </table>
    ```

---

9. Write HTML input tags snippet to show default values for all Form elements.
   
    - `<input type="button">`
    - `<input type="checkbox">`
    - `<input type="color">`
    - `<input type="date">`
    - `<input type="datetime-local">`
    - `<input type="email">`
    - `<input type="file">`
    - `<input type="hidden">`
    - `<input type="image">`
    - `<input type="month">`
    - `<input type="number">`
    - `<input type="password">`
    - `<input type="radio">`
    - `<input type="range">`
    - `<input type="reset">`
    - `<input type="search">`
    - `<input type="submit">`
    - `<input type="tel">`
    - `<input type="text">`
    - `<input type="time">`
    - `<input type="url">`
    - `<input type="week">`
    > <img src="https://github.com/JPC8/guvi_BootCamp/blob/main/Tasks/Week2/HTML-Practice-task/5.png">

---

10. In your, HTML page add the below line and Highlight it without using any CSS.

- "HTML & CSS is awesome"

  ```html
  <mark>HTML & CSS is awesome</mark>
  ```

---

11. Create an HTML page, which should contain all types of input elements.
    ```html
    <form>
      <input type="button" value="Click Me" /><br />

      Check Box<br />
      <input type="checkbox" /> <br />

      Pick a color<br />
      <input type="color" /><br />

      Select the date<br />
      <input type="date" /> <br />

      Select the Local Time date<br />
      <input type="datetime-local" /><br />

      Enter the Email<br />
      <input type="email" /><br />

      Choose a file<br />
      <input type="file" /><br />

      Hidden !<br />
      <input type="hidden" /><br />

      Upload a image<br />
      <input type="image" /><br />

      Enter the Month<br />
      <input type="month" /><br />

      Enter the Number<br />
      <input type="number" /><br />

      Enter the Password<br />
      <input type="password" /><br />

      Radio button<br />
      <input type="radio" /><br />

      Select the range<br />
      <input type="range" /><br />

      <input type="reset" /><br />

      Search<br />
      <input type="search" /><br />

      <input type="submit" /><br />

      Enter tel<br />
      <input type="tel" /><br />

      Enter your text<br />
      <input type="text" /><br />

      Enter the time<br />
      <input type="time" /><br />

      Enter the URL<br />
      <input type="url" /><br />

      Select the Week<br />
      <input type="week" /><br />
    </form>
    ```
