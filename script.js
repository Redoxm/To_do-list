  // Initialize tasks array
  let tasks = [];

  // Function to add a new task
  function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskText = taskInput.value.trim();

      if (taskText !== '') {
          tasks.push({ text: taskText, completed: false });
          taskInput.value = '';
          renderTasks();
      }
  }

  // Function to render tasks
  function renderTasks() {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = '';

      tasks.forEach((task, index) => {
          const li = document.createElement('li');
          li.innerHTML = `
              <div class="task-text ${task.completed ? 'completed' : ''}">${task.text}</div>
              <div class="task-controls">
                  <button class="complete" onclick="toggleComplete(${index})">${task.completed ? 'Unmark' : 'Mark'} Complete</button>
                  <button onclick="removeTask(${index})">Delete</button>
              </div>
          `;
          taskList.appendChild(li);
      });
  }

  // Function to remove a task
  function removeTask(index) {
      tasks.splice(index, 1);
      renderTasks();
  }

  // Function to toggle task completion status
  function toggleComplete(index) {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
  }

  // Initial rendering
  renderTasks();

 

  