console.log('hello');

$(document).ready(onReady);

function onReady() {
  console.log('on ready');
  $('.js-btn-submit').on('click', submitTask);
}

function submitTask() {
  let taskToSend = {
    task: $('.js-task-in').val(),
    status: $('.js-status-in').val(),
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
