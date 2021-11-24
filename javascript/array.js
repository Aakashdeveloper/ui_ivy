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