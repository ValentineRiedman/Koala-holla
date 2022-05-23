console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  $( '#addButton' ).on( 'click', saveKoala );
  $( '#viewKoalas').on( 'click', '.readyButton', updateKoala );
  $( '#viewKoalas').on( 'click', '.sellButton', transferKoala );

  getKoalas();

}); // end doc ready


function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    method: 'GET',
    url: '/koala'
}).then( function( response ){
    console.log( 'back from GET:', response );
    let el = $( '#viewKoalas' );
    el.empty();
    // loop through response
    for( let i=0; i< response.length; i++){
        if(response[i].ready_to_transfer === false ){
        // append each item to DOM
        el.append( `<tr><td>${ response[i].name }</td> <td>${ response[i].age }</td> <td>${ response[i].gender }</td>  
        <td>${ response[i].ready_to_transfer }</td><td>${ response[i].notes }</td><td><button class="readyButton" data-id="${ response[i].id }">Ready for Transfer</button></td></tr>` );
        }
        else{
            el.append( `<tr><td>${ response[i].name }</td> <td>${ response[i].age }</td> <td>${ response[i].gender }</td>  
        <td>${ response[i].ready_to_transfer }</td><td>${ response[i].notes }</td><td><button class="sellButton" data-id="${ response[i].id }">Transfer</button></td></tr>` );
        }
    }   
}).catch( function( err ){
    console.log( err );
    // alert the user of error
    alert( 'error getting items. see console for more info' );
})
  
} // end getKoalas

function saveKoala(){
  console.log( 'in saveKoala');
  // ajax call to server to get koalas
  let koalaToSend = {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      readyForTransfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val()
};
console.log( 'sending:', koalaToSend );
// send new item obj to server via POST
$.ajax({
    method: 'POST',
    url: '/koala',
    data: koalaToSend
}).then( function( response ){
    console.log( 'back from POST:', response );
    // if successful, update DOM
    getKoalas();
}).catch( function( err ){
    // if not, alert user
    console.log( err );
    alert( 'error adding item. see console for details' );
}) // end AJAX
 
}// end saveKoala

//update koalas
function updateKoala(){
    console.log('in updateKoala', $( this ).data('id') );
    $.ajax({
        method: 'PUT',
        url: '/koala?id=' + $( this ).data( 'id' )
    }).then( function( response ){
        console.log( response );
        getKoalas();
    }).catch( function( err ){
        alert('erorr completing PUT');
    })
}// end updateKoala

function transferKoala(){
    console.log( 'in transferKoala')
    $.ajax({
        method: 'DELETE',
    url: `/koala?id=${ $( this ).data( 'id' )}`
    }).then( function( response ){
        console.log( response );
        getKoalas();
    }).catch( function( err ){
        console.log( err );
        alert( 'error transfering koala');
    })
}// end transferKoala