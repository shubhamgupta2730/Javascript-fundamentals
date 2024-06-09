console.log(window.document)

console.log(document)

console.dir(document)

document.getElementById('heading').innerHTML = "<h1>Change heading</h1>"
//it will change the text of above id which is given to element in the document model .

//? window->document->HTML->head , Body...

document.getElementById('title').id

document.getElementById('title').className

document.getElementById('title').getAttribute('class')

document.getElementById('title').setAttribute('class', 'test')

title.style.backgroundColor='green'

title.style.borderRadius = "15px"

//Below methods shows the text content of title id .

title.textContent // it will show all the text written  inside that id, either it is visible on webpage or not. 

title.innerText // it only shows the content that is visible on web page. and do not show the content which is not visible due to some css properties. 

title.innerHTML // it shows  the HTML tags also, above two methods only show the text content, but this innerHTMl will show the html tags also. 

// above 3 methods shows the same output.

//? Query Selectors : returns HTML collection

document.querySelector('h2') // it will select the first h1 tag in document.

document.querySelector('.heading') // it will select the heading class.

document.querySelector('#title')  // it will select the title id. 

document.querySelector('input[type="password"]') // selects the input field with type = password. 
 
//selecting a particular HTML element: and changing its styling : 
const myul = document.querySelector('ul')
const myli = myul.querySelector('li')
myli.innerText = "five"
myli.style.backgroundColor='green'

//? QuerySelectorAll :  it returns the nodelist: (not array) but similar to array.

const tempList = document.querySelectorAll('li') // it will select all the li list of the html page.

tempList[0].style.color = 'green'  // it will change the color of the first li element. 

//using forEach loop on nodelist for applying on all the elements.
tempList.forEach(function (l){
  l.style.backgroundColor = 'green'
})


//? getElementByClassName: 

document.getElementsByClassName('li')

//! we cannot use forEach loop on HTML collections , so we can convert it using array to apply loops

Array.from(items)

//now we can apply forEach loop to access all the elements.



