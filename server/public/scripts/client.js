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

function saveTask() {}
