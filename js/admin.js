let db;

init();
let data = [
    {
        num: '555',
        division:'/УПР. ИТ/ВСП.СТР.П.',
        activities: 'Общество с ограниченной ответственностью "Белкалий-Мигао',
        post: 'Ремонтные работы',
        date:'16.02.2021',
        active: "true",
        col:'10'
    },
    {
        num: '5336',
        division:'/УПР. ИТ/ВСП.СТР.П.',
        activities: 'Управление транспортом',
        post: 'МЕТОДИСТ ПО ФИЗИЧЕСКОЙ КУЛЬТУРЕ',
        date:'16.02.2021',
        active: "false",
        col:'12'
    },
    {
        num: '555',
        division:'/ЦС/ВСП.СТР.П./',
        activities: 'Строительство и жилищно-коммунальное хозяйство',
        post: 'Слесарь-сантехник 4 разряда',
        date:'16.02.2021',
        active: "true",
        col:'10'
    },
    {
        num: '555',
        division:'/СОФ 1РУ/РУ-1',
        activities: 'Общественное питание',
        post: 'ОФИЦИАНТ',
        date:'16.02.2021',
        active: "true",
        col:'10'
    },
    {
        num: '555',
        division:'К-ТРАНС',
        activities: 'Управление транспортом',
        post: 'МАШИНИСТ БУЛЬДОЗЕРА',
        date:'16.02.2021',
        active: "true",
        col:'10'
    },
    {
        num: '555',
        division:'/РМЦ/ВСП.СТР.П.',
        activities: 'Ремонтные работы',
        post: 'ЭЛЕКТРОМОНТЕР ПО РЕМОНТУ И ОБСЛУЖИВАНИЮ ЭЛЕКТРООБОРУДОВАНИЯ',
        date:'16.02.2021',
        active: "true",
        col:'10'
    },
    {
        num: '555',
        division:'БК-АГРО',
        activities: 'Технология производства минеральных удобрений',
        post: 'МАШИНИСТ СКРЕПЕРНОЙ ЛЕБЕДКИ',
        date:'16.02.2021',
        active: "true",
        col:'10'
    },
    {
        num: '555',
        division:'УДО/УДО СР ЖКХ/ДОШК.ЦРР',
        activities: 'Строительство и жилищно-коммунальное хозяйство',
        post: 'СЛЕСАРЬ-САНТЕХНИК',
        date:'16.02.2021',
        active: "true",
        col:'10'
    },
    {
        num: '555',
        division:'/ДОШК.ЦРР/УДО СР ЖКХ/УДО',
        activities: 'Строительство и жилищно-коммунальное хозяйство',
        post: 'СЛЕСАРЬ-САНТЕХНИК',
        date:'16.02.2021',
        active: "false",
        col:'10'
    },
    {
        num: '555',
        division:'/КОТЕЛ.3РУ/РУ-3',
        activities: 'Управление транспортом',
        post: 'ВЕТЕРИНАРНЫЙ ВРАЧ',
        date:'16.02.2021',
        active: "false",
        col:'10'
    }
]

async function init() {
    db = await idb.openDb('store', 1, db => {
    db.createObjectStore('offer', {keyPath: 'name'});
  });

//   addBook(data);
list()
}

async function list() {
  let tx = db.transaction('offer');
  let offerStore = tx.objectStore('offer');

  let books = await offerStore.getAll();

  console.log(books)
}

async function clearBooks() {
  let tx = db.transaction('offer', 'readwrite');
  let offers = tx.objectStore('offer')
  let deleteRequest = offers.delete(3);

  await tx.objectStore('books').clear();
  await list();
}


async function addBook(data) {
  let tx = db.transaction('offer', 'readwrite');

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const num = element.num
    try {
        await tx.objectStore('offer').add({num,element});
      } catch(err) {
        if (err.name == 'ConstraintError') {
          alert("Такая книга уже существует");
          await addBook();
        } else {
          throw err;
        }
      }
  }

  
}

window.addEventListener('unhandledrejection', event => {
  alert("Ошибка: " + event.reason.message);
});


function test(pad) {
    console.log(event);
}


var app = new Vue({
    el:"#main",
    data:{
        name:'',
        SelectedType:'',
        SelectedNum:'',
        Offers:[
            {
                num: '555',
                division:'/УПР. ИТ/ВСП.СТР.П.',
                activities: 'Общество с ограниченной ответственностью "Белкалий-Мигао',
                post: 'Ремонтные работы',
                date:'16.02.2021',
                active: "true",
                col:'10'
            },
            {
                num: '5336',
                division:'/УПР. ИТ/ВСП.СТР.П.',
                activities: 'Управление транспортом',
                post: 'МЕТОДИСТ ПО ФИЗИЧЕСКОЙ КУЛЬТУРЕ',
                date:'16.02.2021',
                active: "false",
                col:'12'
            },
            {
                num: '555',
                division:'/ЦС/ВСП.СТР.П./',
                activities: 'Строительство и жилищно-коммунальное хозяйство',
                post: 'Слесарь-сантехник 4 разряда',
                date:'16.02.2021',
                active: "true",
                col:'10'
            },
            {
                num: '555',
                division:'/СОФ 1РУ/РУ-1',
                activities: 'Общественное питание',
                post: 'ОФИЦИАНТ',
                date:'16.02.2021',
                active: "true",
                col:'10'
            },
            {
                num: '555',
                division:'К-ТРАНС',
                activities: 'Управление транспортом',
                post: 'МАШИНИСТ БУЛЬДОЗЕРА',
                date:'16.02.2021',
                active: "true",
                col:'10'
            },
            {
                num: '555',
                division:'/РМЦ/ВСП.СТР.П.',
                activities: 'Ремонтные работы',
                post: 'ЭЛЕКТРОМОНТЕР ПО РЕМОНТУ И ОБСЛУЖИВАНИЮ ЭЛЕКТРООБОРУДОВАНИЯ',
                date:'16.02.2021',
                active: "true",
                col:'10'
            },
            {
                num: '555',
                division:'БК-АГРО',
                activities: 'Технология производства минеральных удобрений',
                post: 'МАШИНИСТ СКРЕПЕРНОЙ ЛЕБЕДКИ',
                date:'16.02.2021',
                active: "true",
                col:'10'
            },
            {
                num: '555',
                division:'УДО/УДО СР ЖКХ/ДОШК.ЦРР',
                activities: 'Строительство и жилищно-коммунальное хозяйство',
                post: 'СЛЕСАРЬ-САНТЕХНИК',
                date:'16.02.2021',
                active: "true",
                col:'10'
            },
            {
                num: '555',
                division:'/ДОШК.ЦРР/УДО СР ЖКХ/УДО',
                activities: 'Строительство и жилищно-коммунальное хозяйство',
                post: 'СЛЕСАРЬ-САНТЕХНИК',
                date:'16.02.2021',
                active: "false",
                col:'10'
            },
            {
                num: '555',
                division:'/КОТЕЛ.3РУ/РУ-3',
                activities: 'Управление транспортом',
                post: 'ВЕТЕРИНАРНЫЙ ВРАЧ',
                date:'16.02.2021',
                active: "false",
                col:'10'
            }
        ],
    },
    computed:{
        filteredList: function(){
            var comp = this.name;
            return this.Offers.filter(function (elem) {
                if(comp=='') {
                    return true;
                }
           
            })
        }
    }
})