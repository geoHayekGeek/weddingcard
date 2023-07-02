function showInput() {
    let comment = document.getElementById("comment-input");
    let btn = document.getElementById("dropdownComment");
    let checkboxCon = document.getElementById("checkbox-wrap");
    let sbtn = document.getElementById("submit");
    let classes = comment.classList;
    classes.forEach((classe) => {
        if(classe=="d-none"){
            comment.classList.remove("d-none");
            comment.classList.add("d-block");
            btn.classList.add("d-none");
            sbtn.classList.remove("mt-5");
            checkboxCon.classList.remove("my-5");
            checkboxCon.classList.add("mt-5");
        }
    })
}