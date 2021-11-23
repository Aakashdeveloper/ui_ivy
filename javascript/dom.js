document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('h1')[0]
<h1>​I'm AAKASH HANDA​</h1>​
document.getElementsByTagName('h1')[0].innerText
"I'm AAKASH HANDA"
document.getElementsByTagName('h1')[0].innerText = "I am from edureka"
'I am from edureka'
document.getElementsByClassName('scroll')
HTMLCollection(5) [a.scroll, a.scroll, a.scroll, a.scroll, a.scroll]
document.getElementsByClassName('scroll')[0]
<a href=​"#skills" class=​"scroll">​Skills​</a>​
document.getElementsByClassName('scroll')[1]
<a href=​"#youtube" class=​"scroll">​Youtube​</a>​
document.getElementsByClassName('scroll')[1].innerText="Vidoes"
'Vidoes'
document.getElementsByTagName('h1')[0].style.color="red"
'red'
document.getElementsByTagName('h1')[0].style.visibility = hidden
VM1025:1 Uncaught ReferenceError: hidden is not defined
    at <anonymous>:1:59
(anonymous) @ VM1025:1
document.getElementsByTagName('h1')[0].style.visibility = "hidden"
'hidden'
document.getElementsByTagName('h1')[0].style.visibility = "visible"
'visible'