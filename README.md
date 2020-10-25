# To-Do Application

Weekend Challenge: SQL To-Do List

## Description

With this Project, my goal was to create an application that helps me keep track of tasks. I can add to my list of tasks on my page with inputs. Once the task is stored in my list, I have the option to change its completion status from false to true. Or if I simply want to remove a certain task, I just hit the delete button and it is gone. Once I complete a task, its status is changed to completed and the color of the row is turned green.

I first created a database named, 'weekend-to-do-app'. From there I created a table for my tasks to be stored on, through Postico. Once I had a few tasks in my table, I started to set up all of my server files. I created a router file that linked to my database with postgresql. In my router file, my GET, POST, PUT and DELETE routes are all talking to my client side. Once all routes were created and working, I started my server and tested what I had. My task list was appended to the DOM and I was able to submit new tasks. Once a new task is submitted, it is not only displayed on the DOM but also added to my database table. After I was sure that the information was being stored correctly, I go to work on my completion and delete buttons. Using PUT and DELETE routes, I am able to click on either button on my client side and it correctly changes my completion status or completely deletes the information from my database. When a task is completed, I used .addClass to change the color of that specific task. The complete button is also removed as an option, once the task is complete.

## Usage

1. Add in a task and its status of whether or not it has been completed.
2. Click submit to add that task to the DOM/database.
3. Once your task has been submitted, it will have two options: Complete or Delete.
4. Click the Complete button once your task is finished and it will change its status from false to true.
5. If you wish to remove a task completely, click the Delete button and it will be gone.

### Built With

HTML5, CSS, JavaScript, jQuery, Node, Express, Postgresql, Postico and Postman.

##### License

MIT License

Copyright (c) [2020] [Alex Campbell]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

###### Acknowledgement

Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. I would also like to thank Trevor Sansalone and Lara Komosa for coming together to help one another out on Saturday. Also, all other classmates of the Castor cohort. We all are willing to help one another out with anything and it is a great feeling.
