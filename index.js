console.log("Hello ");

// constructor
function Book(name,author,type)
{
    this.name=name;
    this.author=author;
    this.type=type;
}

//Display book
function Display()
{

}

//Add Methods to display prototype
Display.prototype.add=function(book){
      console.log("Adding to UI");
      tablebody=document.getElementById('tableBody');
      let uiString=`<tr>
    <td>${book.name}</td>
      <td>${book.author}</td>
      <td>${book.type}</td>
    </tr>`;
    tablebody.innerHTML+=uiString;

}

Display.prototype.clear=function(){
    let libraryform=document.getElementById('libraryForm');
    libraryform.reset();
}

Display.prototype.validate=function(book){
    if(book.name.length<2||book.author.length<2)
    {
        return false;
    }
    else{
        return true;
    }
}

Display.prototype.show=function(type,message){
    let Message=document.getElementById('message');
    Message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Meesage:</strong> ${message}.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;

  setTimeout(() => {
    Message.innerHTML='';
  }, 2000);
}



//Add submit eventlistener to libraryForm
let libraryform=document.getElementById('libraryForm');
libraryform.addEventListener('submit',submitForm);

function submitForm(e){
   console.log('You have submitted library form');
   let name=document.getElementById('BookName').value;
   let author=document.getElementById('Author').value;
   let type;
   let detective=document.getElementById('Detective');
   let autobiography=document.getElementById('Autobiography');
   let comics=document.getElementById('Comics');

   if(detective.checked)
   {
       type=detective.value;
   }
   else if(autobiography.checked)
   {
       type=autobiography.value;
   }
   else if(comics.checked)
   {
       type=comics.value;
   }

   let book=new Book(name,author,type);
   console.log(book);

   let display=new Display();
   if(display.validate(book)){
   display.add(book);//add book details to the table
   display.clear();//clear form after adding details
   display.show('success','Your book has been successfully added');
   }
   else {
       display.show('danger','You must give correct input');
   }
   
   e.preventDefault();//prevent page from reloading throgh addbook button
}

