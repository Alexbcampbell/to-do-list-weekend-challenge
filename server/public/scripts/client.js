console.log('hello');

$(document).ready(onReady);

function onReady() {
  console.log('on ready');
  $('.js-btn-submit').on('click', submitTask);
  $('.viewTask').on('click', '.js-btn-complete', updateTaskTransfer);
  $('.viewTask').on('click', '.js-btn-delete', deleteTask);
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

function updateTaskTransfer() {
  const index = $(this).data('index');
  taskChecker = {
    complete: true,
  };
  console.log(index);
  $.ajax({
    type: 'PUT',
    url: `/list/${index}`,
    data: taskChecker,
  })
    .then((deleteMessage) => {
      getTask();
    })
    .catch((err) => {
      console.log(err);
      alert('Could not update data');
    });
  $(this).parent().addClass('green');
}

function deleteTask() {
  const index = $(this).data('index');
  $.ajax({
    type: 'DELETE',
    url: `/list/${index}`,
  })
    .then((deleteMessage) => {
      getTask();
    })
    .catch((err) => {
      console.log(err);
      alert('Could not update data');
    });
}

function render(response) {
  listOfTasks = response;
  $('.viewTask').empty();
  for (let tasks of listOfTasks) {
    if (tasks.complete == false) {
      $('.viewTask').append(`<tr>
      <td>${tasks.task}</td>
      <td>${tasks.complete}</td>
      <td><button class="js-btn-complete" data-index="${tasks.id}">Complete</button></td>
      <td><button class="js-btn-delete" data-index="${tasks.id}">Delete</button></td>
      </tr>`);
    } else {
      $('.viewTask').append(`<tr>
      <td>${tasks.task}</td>
      <td>${tasks.complete}</td>
      <td></td>
      <td><button class="js-btn-delete" data-index="${tasks.id}">Delete</button></td>
      </tr>`);
    }
  }
}
