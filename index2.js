function MainAddBtn(){
    document.getElementById("blur-div").style.filter="blur(10px)";
    document.getElementById("add-list-div").style.display="block";
}

function closeDiv(div){
    document.getElementById("blur-div").style.filter="none";
    document.getElementById(div).style.display="none";
}


const cardsList = [];

function addNewList(){
    const listName = document.getElementById("list-textbox").value;
    // console.log(listName);
    const tempList = {
        id: Date.now(),
        name : listName,
        subTask : [ ] 
    }
    cardsList.push(tempList);

    console.log(cardsList);

    addListOnScreen();
}


function addListOnScreen(){
    closeDiv("add-list-div");
    // document.getElementById("blur-div").style.filter="none";
    // document.getElementById("add-list-div").style.display="none";
    document.getElementById("msg-div").style.display="none";

    let icons_Task = '';
    cardsList.forEach((element,index) => {
    icons_Task += `
        <div id="${element.id}" class="lists">
            <p>${element.name}</p>
            <hr class="line">
            <ul class="task-container" id="${'id' + element.id}"></ul>
            <div class="bothIcon">
                <span class="deleteIcon"><i class="fas fa-trash-alt icondelete" onclick="deleteCard(${element.id})"></i></span>
                <span class="addIcon"><i class="fas fa-plus-circle iconadd" onclick="addInnerTask(${element.id})"></i></span>
            </div>
        </div>`
})    

    let box = document.getElementById("box");
    box.innerHTML=icons_Task;
}


//TO DELETE TEH CARDS
function deleteCard(deleteId){
    cardsList.forEach((element,index)=>{
        if (element.id === deleteId) {
            cardsList.splice(index, 1);
        }

    });

    addListOnScreen();
}



//FUNCTION TO ADD TASKS INSIDE CARD
function addInnerTask(id){
   
    document.getElementById("blur-div").style.filter="blur(10px)";
    document.getElementById("add-task").style.display="block";
        
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskTextbox = document.getElementById("task-textbox");

    taskTextbox.value="";           //for cleaning the textbox


    addTaskBtn.onclick = ()=>{
        let TaskName = taskTextbox.value;

        cardsList.forEach((element,index) => {
            if (element.id===id) {
                const tempTask = {
                    taskId: Date.now(),
                    taskName: TaskName
                }
                cardsList[index].subTask.push(tempTask);
            }

        addTaskOnScreen();

        })

        document.getElementById("add-task").style.display="none";
        document.getElementById("blur-div").style.filter="none";
    }

}


function addTaskOnScreen(){
    cardsList.forEach((element,index) => {

        let taskContainer = document.getElementById('id' + element.id);

        let taskTag = '';
        element.subTask.forEach(task => {
            taskTag += `
                <li>
                    <span class="task-name" id="${'tid' + task.taskID}">${task.taskName}</span>
                </li>
            `
        })
        taskContainer.innerHTML=taskTag;

    })
}





// function addNewTask(addId){

//     closeDiv("add-task");
//     document.getElementById("msg-div").style.display="none";

//     let task = document.getElementById("task-textbox").value;
//     // console.log(task);

//     cardsList.forEach((element,index)=>{
//         if (element.id === addId) {
//             // tempList.subTask.push(task);
//             console.log("hello");
//         }


//         console.log(element.id);

//         console.log(addId);

//     });

//}