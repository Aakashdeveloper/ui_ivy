localStorage
> presistent storage
> wrt to browser
> we have to remove manually

localStorage.setItem('user','adminuser')
undefined
localStorage.getItem('user')
'adminuser'
localStorage.removeItem('user')


sessionStorage
> temp storage
> save wrt to tab

sessionStorage.setItem("mytoken","8978cdv788e7")
undefined
sessionStorage.getItem("mytoken")
'8978cdv788e7'
sessionStorage.removeItem("mytoken")
undefined