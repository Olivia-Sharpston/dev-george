fetch('https://github.com/Olivia-Sharpston/dev-george/blob/main/data/bookData.json')
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json(); 
  })
  .then(data => {
      console.log(data);
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

        document.getElementById('body').innerHTML += `title: ${log.title}, author: ${log.author}, link: ${log.link} <br>`; 

        
    document.getElementById('dataSpot').innerHTML += `<li class="list-group-item"><strong>${log.title}, ${log.author}: </strong>${log.link}</li>`; 
 }
}