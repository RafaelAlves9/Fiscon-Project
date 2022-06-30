# Gerenciador de Produtos - ANGULAR/TYPESCRIPT

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.
## 🚀 Starting Project:
* Install required dependencies: "npm install"
* Starting Angular server: "ng serve"
* Starting Json-server: "json-server --watch db.json"
## 🚀 Technologies:
* Angular, Angular material, Typescript, Html5, Css3, Json-server (CRUD), LocalStorage, Angular Router and others...
## 🚀 Project Details:
* Page routes: Login, Registration and User management page.
* Components have been separated by specific folders for better organization. A service component was also created that is responsible for managing the Json-server API.
* Colors and design ux patterns.
#### Login page:
* Initially, the user will be directed to the Login page, where he must enter an account already registered in the system to obtain the “logged” status and be automatically directed to the User Management page.
* If you enter an invalid account, a conditional error message will appear.
#### Registration page:
* If the user does not yet have an account, he can access the registration page and create his account with an email and password.
* Registration made with Json-Server, using an algorithm to check if the email is already being used by an existing account.
#### User Management page:
* The User Management page is private, only users logged can to access and view your content.
* This blocking algorithm was done within the User Management component itself, which checking if the user has the "logged" parameter in his LocalStorage.
* LocalStorage was used to store the Login Token as it ensures that the user is not logged out when they need to reload the page or restart the browser.
* A table made with Angular Material and Json-Server CRUD was used to manage registered collaborators.
* With filtering, sorting, paging and Logout Button.
* And buttons that open different modes to add and edit users, as well as other buttons that favorite and exclude the user
* Logout button removes "logged" status and redirects user to login page.
## 🚀 Personal Details:
* This is my second time using Angular and Typescript in a project., my main framework is React, but I've been studying Angular for 3 weeks.
* However, I didn't experience many difficulties because I had already done a similar project in React.
* My biggest difficulty was using Angular Material for the first time, I wasn't used to importing its APIs into the main module before using it, as well as other necessary Typescript definitions. However, after a few hours studying its documentation, everything became much simpler. 😁
