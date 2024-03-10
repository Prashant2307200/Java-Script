sessionStorage.setItem('name', 'harry');
sessionStorage.getItem('name');
sessionStorage.removeItem('name');
sessionStorage.clear()
sessionStorage.key(1)
sessionStorage.length

sessionStorage.key = val; // both are str ,use json method for obj
sessionStorage['key'] = val;
delete sessionStorage.key;

//strorage event
onstorage = (e) => {
    alert('Changed')
}