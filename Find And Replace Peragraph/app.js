
document.addEventListener('DOMContentLoaded', function(){
    let btn = document.getElementById('btnSearch');
    btn.addEventListener('click', doFindAndReplace);
});

function doFindAndReplace(ev){
    ev.preventDefault();
    
    let find = document.getElementById('find').value;
    let replace = document.getElementById('replace').value;
    
    let p = document.querySelector('.target');
    
    while( p.textContent.indexOf(find) != -1 ){
        p.textContent = p.textContent.replace(find, replace);
    }
    
}
