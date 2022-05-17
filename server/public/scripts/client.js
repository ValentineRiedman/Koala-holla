console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  $( '#addButton' ).on( 'click', saveKoala );
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}

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
        // append each item to DOM
        el.append( `<li>${ response[i].name }, ${ response[i].age }, ${ response[i].gender } , ${ response[i].readyForTransfer }, ${ response[i].notes }</li>` );
    }
}).catch( function( err ){
    console.log( err );
    // alert the user of error
    alert( 'error getting items. see console for more info' );
})
  
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
 
}
