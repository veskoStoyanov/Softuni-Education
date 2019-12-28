function extractText() {
  let text = $('#items li').toArray()
  .map((li) => $(li).text()).join(', ');
  
 $('#result').text(text);
  
  
  
}
