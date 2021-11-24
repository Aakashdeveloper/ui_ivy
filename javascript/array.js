array is a collection of homogenious datatype

var a = [2,8,6,99,56] >> Array of numbers
var b = ["aa","efe","efewf"] >> Array of strings
var c = [true,false, false,true,true] >> Array of boolean

array is a collection of homogenious as well as hetrogenious datatype
var d = [3,34,"34","df","df",true,"wf",4]

var city = ["Delhi","Mumbai","Pune","London"]
undefined
city.length
4
city[0]
'Delhi'
city[2]
'Pune'
city[4]
undefined
city[-1]
undefined
city[city.length-1]
'London'
city[city.length-2]
'Pune'
var city = ["Delhi","Mumbai","Pune","London"]
undefined
city.push("Amsterdam")
5
city
(5) ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam']
city.push("Dubai")
6
city
(6) ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Dubai']
city.pop()
'Dubai'
city
(5) ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam']
city.pop(2)
'Amsterdam'

var a = ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam']
undefined
a.unshift('Helsinki')
6
a
(6) ['Helsinki', 'Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam']
a.unshift('Venice')
7
a
(7) ['Venice', 'Helsinki', 'Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam']
a.shift()
'Venice'
a
(6) ['Helsinki', 'Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam']

push > add the value in the end of the array
pop > remove the value from the last
shift > remove the first value
unshift > add the value in the start of array

var a = ['Venice', 'Helsinki', 'Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam']

a.slice(2,5)
(3) ['Delhi', 'Mumbai', 'Pune']
a.slice(1,4)
(3) ['Helsinki', 'Delhi', 'Mumbai']
a.slice(2)
(5) ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam']
a.slice(-1)
['Amsterdam']
a.slice(-2)
(2) ['London', 'Amsterdam']
a
(7) ['Venice', 'Helsinki', 'Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam']

var a = ['Venice', 'Helsinki', 'Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam']
a.splice(indexNumber,deletcount,values)

/// do not delete just add "venice" on index 2
a.splice(2,0,'Venice')

(8) ['Venice', 'Helsinki', 'Venice', 'Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam']

// delete one value on index number
a.splice(2,1)
['Venice']
a
(7) ['Venice', 'Helsinki', 'Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam']

// delete one value on index number 3 and add 2 values
a.splice(3,1,'Indore','Boston')
['Mumbai']
a
(8) ['Venice', 'Helsinki', 'Delhi', 'Indore', 'Boston', 'Pune', 'London', 'Amsterdam']

var a = ["Delhi","Mumbai",5,1]
var b = [3,'Jaipur',4]
a+b
'Delhi,Mumbai,5,13,Jaipur,4'
a.concat(b)
(7) ['Delhi', 'Mumbai', 5, 1, 3, 'Jaipur', 4]

var a = ['Venice', 'Helsinki', 'Delhi', 'Indore', 'Boston', 'Pune', 'London', 'Amsterdam']

undefined
a.sort()
(8) ['Amsterdam', 'Boston', 'Delhi', 'Helsinki', 'Indore', 'London', 'Pune', 'Venice']
a.reverse()
(8) ['Venice', 'Pune', 'London', 'Indore', 'Helsinki', 'Delhi', 'Boston', 'Amsterdam']