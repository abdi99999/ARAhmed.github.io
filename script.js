
        let form = document.querySelector("form");
        let main = document.querySelector(".main");
        form.addEventListener("submit", (event) => {
            let task = event.target.addTask.value;
            let checkStatus = 0;

            let tasks = JSON.parse(localStorage.getItem("addTask")) ?? [];
            for (let v of tasks) {
                if (v.task == task) {
                    checkStatus = 1;
                }
            }

            if (checkStatus == 1) {
                alert("Task already added")
            }

            else {
                tasks.push({
                    "task": task
                })

                localStorage.setItem("addTask", JSON.stringify(tasks))
                event.target.reset();
            }

            displayData();


            //   console.log(tasks);
            //   console.log(name);

            event.preventDefault();

        })

        let displayData = () => {
            let tasks = JSON.parse(localStorage.getItem("addTask")) ?? [];
            let finalData = '';
            tasks.forEach((element, i) => {


                finalData += ` <li> ${element.task} <span onclick='removeTask(${i})' style="float: right; 
                font-size: x-large;  text-align: center; margin-top: -5px"> &times; </span> </li>`
            });


            main.innerHTML = finalData;
        }


        let removeTask = (i) => {
            let tasks = JSON.parse(localStorage.getItem("addTask")) ?? [];
            tasks.splice(i, 1);
            localStorage.setItem("addTask", JSON.stringify(tasks))

            displayData();
        }


        displayData();