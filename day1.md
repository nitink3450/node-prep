## ***#What is node.js ?*** 
-It is Open source,server-side runtime environment built on chrome v8 js engine.\
-It provides an event driven, non-blocking asynchronous programming runtime environment to build server side applications using node js.\
-it doesnt show output on console it will show output on terminal.\
-it operates on single thread non-blocking(only have 1 call stack)

## ***#What is NPM?*** 
-npm is the world's largest Software Library (Registry)
-npm is also a software Package Manager and Installer
-NPM stands for NODE PACKAGE MANAGER used to install,update,delete javascripts modules in our system.

## ***#What are the different modules in Node.js?*** 
-Modules are isolated pieces of code that when put together construct the larger functioning application.\
-The main idea of modules is to break down large pieces of code into smaller pieces. \
-So by storing relevant code in individual files, code can be plugged into other portions of an application via importing. \
-Importing a file means loading in code that is made available for use within the file.\
-There are 3 types of modules:
1. Core modules.
2. Local modules.
3. Third-party modules.
## ***#What is the purpose of the module.exports?*** 
-The module.exports is actually a property of the module object in node.js. module. Exports is the object that is returned to the require() call. By module.exports, we can export functions, objects, and their references from one file and can use them in other files by importing them by require() method.
### Purpose:
1. The main purpose of module.exports is to achieve modular programming. Modular programming refers to separating the functionality of a program into independent, interchangeable modules, such that each contains everything necessary to execute only one aspect of the desired functionality. By not using module.exports it becomes difficult to write a large program without modular/reusable code.
2. Using module.exports we can separate business logic from other modules. In other terms, we can achieve abstraction using it.
3. By Using it becomes easy to maintain and manage the code base in different modules.
4. Enforces separation of concerns. Having our code split up into multiple files allows us to have appropriate file names for every file. This way we can easily identify what every module does and where to find it (assuming we made a logical directory structure which is still your responsibility.
## ***#Difference between default export and named export?*** 
### Named Exports:

- Can export multiple values
- MUST use the exported name when importing
- e.g:
```
export const fetchUsers = () => {
  ...
};
```
### Default Exports:

- Export a single value
- Can use any name when importing
- e.g.: 
```
 export default () => {
  ...
};
```
## ***#How do you import any module in Node.js?*** 
-Importing and exporting files are important parts of any programming language. Importing functions or modules enhances the reusability of code. When the application grows in size, maintaining a single file with all the functions and logic becomes difficult. It also hinders the process of debugging. Therefore, it is good practice to create separate files for specific functions and later import them as per requirement.
### There are three types of modules in Node.js:
1. Importing from local module: These modules are created by the user and can be imported as:
```
const var = require('./filename.js'); // OR
const var = require('./path/filename.js');
```
2. Importing from core modules: These modules are inbuilt in Node.js and can be imported as:
```
const var = require('fs');
```
3. Importing from third party modules: These modules are installed using a package manager such as npm. Examples of third party modules are express, mongoose, nodemon, etc. These are imported as:
```
const express = require('express');
```