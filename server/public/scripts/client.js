console.log('hello');

$(document).ready(onReady);

function onReady() {
  console.log('on ready');
  $('.js-btn-submit').on('click', submitTask);
  getTask();
}

function submitTask() {
  let taskToSend = {
    task: $('.js-task-in').val(),
    complete: $('.js-status-in').val(),
  };
  saveTask(taskToSend);
}

function getTask() {
  console.log('in getTask');
  $.ajax({
    type: 'GET',
    url: '/list',
  })
    .then(function (response) {
      render(response);
    })
    .catch(function (err) {
      console.log(err);
      res.sendStatus(500);
    });
}

function saveTask(newTask) {
  console.log('in saveTask', newTask);
  $.ajax({
    type: 'POST',
    url: '/list',
    data: newTask,
  })
    .then(() => {
      getTask();
    })
    .catch((err) => {
      console.log(err);
      alert('DID NOT SEND TASK');
    });
}

function render(response) {
  listOfTasks = response;
  $('.viewTask').empty();
  for (let tasks of listOfTasks) {
    $('.viewTask').append(`<tr>
      <td>${tasks.task}</td>
      <td>${tasks.complete}</td>
      <td><button class="js-btn-complete" data-index="${tasks.id}">Complete</button></td>
      <td><button class="js-btn-delete" data-index="${tasks.id}">Delete</button></td>
      </tr>`);
  }
}
