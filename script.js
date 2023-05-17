// User authentication
function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Perform authentication logic here
  
  // For demonstration purposes, let's assume the login is successful
  showHomeScreen(username);
}

// Display home screen after successful login
function showHomeScreen(username) {
  document.getElementById('username-display').textContent = username;
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('home-screen').style.display = 'block';
}

// Start run
function startRun() {
  document.getElementById('home-screen').style.display = 'none';
  document.getElementById('run-screen').style.display = 'block';
  
  // Start tracking user's run here
  
  // For demonstration purposes, let's assume the run is stopped after 5 seconds
  setTimeout(stopRun, 5000);
}

// Stop run
function stopRun() {
  document.getElementById('run-screen').style.display = 'none';
  document.getElementById('history-screen').style.display = 'block';
  
  // Stop tracking user's run here
  
  // For demonstration purposes, let's assume the run data is stored and displayed in history
  var historyList = document.getElementById('history-list');
  var runData = 'Distance: 5 km, Duration: 30 minutes';
  var runItem = document.createElement('li');
  runItem.textContent = runData;
  historyList.appendChild(runItem);
}
