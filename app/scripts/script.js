document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const todoList = document.getElementById("todoList");
    const doneList = document.getElementById("doneList");

    // ✅ タスクデータの初期化（localStorageがnullのとき）
    function initTasks() {
        if (!localStorage.getItem("tasks")) {
            localStorage.setItem("tasks", JSON.stringify({ todo: [], done: [] }));
        }
    }

    // 🔄 タスクをロード
    function loadTasks() {
        initTasks(); // 初期化を確認
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        todoList.innerHTML = "";
        doneList.innerHTML = "";

        tasks.todo.forEach((task, index) => createTaskElement(task, index, "todo"));
        tasks.done.forEach((task, index) => createTaskElement(task, index, "done"));
    }

    // 📌 タスク要素を作成
    function createTaskElement(task, index, status) {
        const li = document.createElement("li");
        li.textContent = task;
        li.setAttribute("draggable", true);
        li.setAttribute("data-index", index);
        li.setAttribute("data-status", status);
        li.addEventListener("dragstart", dragStart);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "削除";
        deleteBtn.addEventListener("click", () => deleteTask(index, status));
        li.appendChild(deleteBtn);

        if (status === "todo") {
            todoList.appendChild(li);
        } else {
            doneList.appendChild(li);
        }
    }

    // ✨ タスクを追加
    function addTask() {
        const task = taskInput.value.trim();
        if (task === "") return;
        initTasks(); // 初期化を確認

        const tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.todo.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks)); // ✅ ここで正しく保存
        taskInput.value = "";
        loadTasks();
    }

    addTaskBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // 🗑 タスクを削除
    function deleteTask(index, status) {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks[status].splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    }

    // 🎯 ドラッグ開始時にデータを保存
    function dragStart(event) {
        event.dataTransfer.setData("text/plain", JSON.stringify({
            index: event.target.getAttribute("data-index"),
            status: event.target.getAttribute("data-status")
        }));
    }

    // 📦 ドロップ処理
    function drop(event, newStatus) {
        event.preventDefault();
        const draggedData = JSON.parse(event.dataTransfer.getData("text/plain"));
        const tasks = JSON.parse(localStorage.getItem("tasks"));

        // タスクを移動
        const task = tasks[draggedData.status].splice(draggedData.index, 1)[0];
        tasks[newStatus].push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    }

    // ✔ ドロップを許可
    function allowDrop(event) {
        event.preventDefault();
    }
/*
    //ボタンが押下されたかどうかを確認する
    document.getElementById('loginBtn').addEventListener('click', () => {
        console.log('ログインボタンが押されました');
    }
    );
*/
    // ✅ 初回ロード
    initTasks();
    loadTasks();
});
