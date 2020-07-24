// // Создать функцию которая принимает какой-либо элемент DOM-структуры .
// // Функция создает в боди 2 кнопки (назад/вперед)
// // при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед",
// // вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// // НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед"
// // позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// // Когда все дети заканчиваются, мы выходим из
// // данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// let back = document.getElementById('BACK');
// let forward = document.getElementById('FORWAR');
// let currentElement = document.getElementById('startEL');
//
// //
// // function domWalker({children,  parentElement }) {
// //   return {children, parent: parentElement}
// // }
// //
// // console.log(currentElement);
// //
// // back.onclick = () => {
// //   const {parent} = domWalker(currentElement)
// //   currentElement = parent ? parent : currentElement
// //   console.log(currentElement);
// // }
// //
// // forward.onclick = () => {
// //   const {children} = domWalker(currentElement)
// //   currentElement = children[0] ? children[0] : currentElement
// //   console.log(currentElement);
// // }
//
// function domWalker(domElement) {
//   const children = domElement.children
//   const parent = domElement.parentElement
//
//   return {children: children, parent: parent}
// }
//
// console.log(currentElement);
//
// back.onclick = () => {
//   const parent = domWalker(currentElement).parent
//
//   if (parent !== undefined) {
//     currentElement = parent
//   }
//
//   console.log(currentElement);
// }
//
// forward.onclick = () => {
//   const children = domWalker(currentElement).children
//
//   if (Array.isArray(children)) {
//     currentElement = children[0]
//   }
//
//   console.log(currentElement);
// }


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//   Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня.
// При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования,
// которые уже заполнены данными объект

const data = [
  {
    name: 'Dima',
    phone: 333555
  },
  {
    name: 'Vova',
    phone: 333555
  },
  {
    name: 'Ігор',
    phone: 333555
  }
]

localStorage.setItem('data', JSON.stringify(data))


const allUsers = document.getElementById('allUsers');
const nameInpt = document.getElementById('name');
const phoneInpt = document.getElementById('phone');
const save = document.getElementById('save');

const saveEditBtn = document.getElementById('saveEdit');
const editName = document.getElementById('editName');
const editPhone = document.getElementById('editPhone');


adder()

save.onclick = () => {
  const name = nameInpt.value;
  const phone = phoneInpt.value;

  data.push({ name, phone })
  localStorage.setItem('data', JSON.stringify(data))

  adder();
}

function adder() {
  allUsers.innerHTML = ''

  let item = localStorage.getItem('data');
  const data = JSON.parse(item);

  data.forEach(({ name, phone }, index) => {
    const userDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const editBtn = document.createElement('button');

    removeBtn.innerText = 'REMOVE'
    editBtn.innerText = 'Edit'
    userDiv.innerText = `${ index + 1 }. Name: ${ name }, phone: ${ phone }`
    userDiv.style.backgroundColor = 'pink'
    userDiv.style.margin = '25px'

    removeBtn.onclick = () => {
      data.splice(index, 1);
      localStorage.setItem('data', JSON.stringify(data))
      adder();
    }

    editBtn.onclick = () => {
      editHelper({ name, phone }, index);
    }

    userDiv.appendChild(removeBtn)
    userDiv.appendChild(editBtn)

    allUsers.appendChild(userDiv);
  });
}

function editHelper(user, index) {
  document.getElementById('editForm').style.display = 'block'

  editName.value = user.name
  editPhone.value = user.phone

  saveEditBtn.onclick = () => {
    data[index].name = editName.value
    data[index].phone = editPhone.value

    localStorage.setItem('data', JSON.stringify(data))

    adder();

    document.getElementById('editForm').style.display = 'none'
  }
}










//
// Маєш 2 масива з цифрами.
//   Любими.
//   Треба знайти чи перший масив має в собі квадрати іншого масиву.
//   Порядок циферок не важливий. І якщо це так, то вивести true, якщо ні, вивести false
// Наприклад
//   [1,2,3] [9,1,4] —> TRUE
//   [2,1,2] [1,1,4] —-> FALSE
//   [1,2,3,5] [25, 9, 1, 4, 4] ——> FALSE
//
//
// Знайти анаграму.
//   Маєш 2 слова
// Потрібно знайти чи одне слово складається з тих самих букв шо друге.
// Букви перевикорситосуватись не можуть.
//   Ніяких пробілів, цифер і так далі. Тільки букви малого регістру
//
// okten -> token ——> TRUE
// dima -> aimd —-—> TRUE
// test -> rest ——> FASLE
// Постарайся зробити без вкладених циклів








//
// const obj = {
//   user: {
//     name: 'Dima',
//     wife: {
//       age: 33
//     }
//   }
// }
//
// console.log(obj && obj.car && obj.car.speed);
// console.log(obj?.car?.speed);
