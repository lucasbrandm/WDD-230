function addItem() {
    //getting what was typed
    var text = document.getElementById('textbox').value;

    //adding to the list
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(text));
     
    document.querySelector('#list').appendChild(node);

    //clearing the field
    document.getElementById("textbox").value = '';
}