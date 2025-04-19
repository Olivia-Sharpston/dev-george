// Fetch the JSON data

// fetch('../data/parkingData.json')
fetch('/data/bookData.json')

// {
    // mode: 'cors',
//     headers: {
//       'Access-Control-Allow-Origin':'*'
//     }
//   }
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(data => {
        //use to check data object returned okay
        //console.log(data.parkingData);

         displayBookData(data.bookData);
    })
    .catch(error => {
        // Handle errors
        console.error('Fetch Error :-S', error);
    });


function displayBookData(bookData) {
   
    for (const log of bookData) {
        console.log(`title: ${log.title}`);
        console.log(`author: ${log.author}`);
        console.log(`link: ${log.link}`);

        document.getElementById('dataSpot').innerHTML += `<li class="list-group-item"><strong>${log.title}, ${log.author}: </strong>${log.link}</li>`; 

 }
}