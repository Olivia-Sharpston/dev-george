# dev-george
## This project was done by Olivia Sharpston. This is the last project for CIS 376-01 -> Dev George: a revision of an past project. For mine, I am using my Dev Able project, which was the first project we had done in class.

#### As a person who enjoys reading, I want to be able to log and keep track of what I have read. Additionally, I want to be able to keep track of what I have to read next and what is on my bookshelves. I want this so that I can efficiently and effectively have all of this information in one place and in a nice format for me to be able to read and interact with as a user. 

#### There are more aspects to this project than it may seem. One may think that it is just to look at what you have read. However, this cam be used as a tool to use when reading. This app include reading start and end dates. Additinally, there is a section to be able to put some thoughts that one may have about a book they're reading or going to read. There is a TBR list located at the bottom of the app.

#### In this project, I had implemented using JSON fomrat to display information in the 'To Be Read (TBR)' section. When I had done this project orginally, I had used an unordered list. The code below is a snippet displaying the unordered list I had used in Dev Able.
```javascript
  <ul>
    <li>Fourth Wing Series by <a href="https://rebeccayarros.com/" target="_blank">Rebecca Yarros</a></li>

    <li>Hooked Series by <a href="https://www.emilymcintire.com/" target="_blank">Emily McIntire</a></li>

    <li>Once Upon A Broken Heart Series by <a href="https://www.goodreads.com/author/show/14137787.Stephanie_Garber" target="_blank">Stephanie Garber</a></li>
  </ul>
```

#### When I had started revising the app and saw there was a Login option needed, I immediantly has in mind what I wanted. In my opinion, it is good to not overlycomplicate the way an app or site looks. This could easily overwhelm or confused the user. I had wantes a simple login screen with the username blank, password blank, and the login button. The image below is the idea I had in mind. This login screen is from PHP MySQL Login. 
<img src="https://designmodo.com/wp-content/uploads/2018/12/5-PHP-MySQL-Login-System.jpg" alt="SQLLogin">


#### Here is a snip of code from this project that I think is interesting. 
https://github.com/Olivia-Sharpston/dev-george/blob/4e309c17b91c12ed9be0ed729c03a61aacd820b1/scripts/script.js#L27-L28
#### Whenever the user logs in, their logo in the navigational bar is changed to "Welcome, " and the username entered in the login screen. The document.querySelector() method, which is line 27, returns the first element that matches a CSS selector. In the parethesis is the CSS selector; therefore, it would be ".navbar-brand" in the above code. Additionally, this changes the login button to say "Logout." The .textContent property, which is line 28, sets or returns the text content of the specified node, and all its descendants. The .textContent simply changes the word in loginBtn to be "Logout" versus the original "Login."

<br></br>

### This is a Github Issue that refers to future <a href="https://github.com/Olivia-Sharpston/dev-george/issues/1" target="_blank">Future Ideas!</a> for the Book Logging App. 

# makke the markdown list

<br></br>

## References:
Modal Reference: https://www.w3schools.com/bootstrap5/bootstrap_modal.php
<br></br>
Text Area Reference: https://www.w3schools.com/tags/tag_textarea.asp
<br></br>
Change Login Buttone Color Reference: https://getbootstrap.com/docs/4.0/components/buttons/
<br></br>
.querySelector Reference: https://www.w3schools.com/Jsref/met_document_queryselector.asp
<br></br>
.textContent Reference:https://www.w3schools.com/jsref/prop_node_textcontent.asp
<br></br>
Form Reference: https://www.w3schools.com/html/html_forms.asp
<br></br>
Event Listener Reference: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
