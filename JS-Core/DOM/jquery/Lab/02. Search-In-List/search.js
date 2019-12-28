function search() {
   let text = $('#searchText').val();
   
   if (text.trim() !== '') {
      let cities = $(`#towns li:contains(${text})`);
      $(`#towns li`).css('font-weight', '');
      cities.css('font-weight', 'bold');


      
      $('#result').text(`${cities.length} matches found`)
   }

}