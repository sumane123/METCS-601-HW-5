document.getElementById("fetchBtn").addEventListener("click", fetchCollegeDegree);

function fetchCollegeDegree() {
  fetch('https://heroic-mochi-98b086.netlify.app/data/college_degree.json')
    //fetch('../data/college_degree.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ${response.status}');
      }
      return response.json();
    })
    .then(data => {
      console.log('Fetched Data:', data);
      displayData(data);
    })
    .catch(error => {
      console.error('Fetch Error:', error);
    });
}

function displayData(data) {
  let outputElement = document.getElementById('output');
  outputElement.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
  
}
