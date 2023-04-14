 
 
 
 var app = new Vue({
    el:"#main",
    data:{
        name:'',
        SelectedType:'',
        SelectedNum:'',
        Offers:[
            {
                name: 'Слесарь-ремонтник 4 разряда',
                direction: 'Общество с ограниченной ответственностью "Белкалий-Мигао',
                division: 'Ремонтные работы',
                num:'num1',
               type:'type1'
            },
            {
               name: 'Слесарь-ремонтник 4 разряда',
                direction: 'Мясоперерабатывающий комплекс',
                division: 'Строительство и жилищно-коммунальное хозяйство',
                num:'num2',
                type:'type2'
            },
            {
                name: 'Повар 4 разряда',
                direction: 'Управление социального развития и жилищно-коммунального хозяйства',
                division: 'Общественное питание',
                num:'num3',
                type:'type3'
            },

            {
                name: 'Слесарь по контрольно-измерительным приборам и автоматике',
                direction: 'Управление автоматизации',
                division: 'Ремонтные работы',
                num:'num4',
                type:'type1'
            },
            {
                name: 'Слесарь-сантехник',
                direction: 'Управление социального развития и жилищно-коммунального хозяйства',
                division: 'Строительство и жилищно-коммунальное хозяйство',
                num:'num3',
                type:'type2'
            },
            {
                name: 'Маркшейдер участковый',
                direction: 'Рудник четвертого рудоуправления',
                division: 'Геология и маркшейдерия',
                num:'num5',
                type:'type4'
            },
            {
                name: 'Специалист по информационной безопасности',
                direction: 'Управление',
                division: 'Охрана и безопасность',
                num:'num6',
                type:'type5'
            },
            {
                name: 'Бармен',
                direction: 'Кафе "Алеся" управления социального развития и жилищно-коммунального хозяйства',
                division: 'Общественное питание',
                num:'num7',
                type:'type3'
            },

            {
                name: 'Электромонтер линейных сооружений',
                direction: 'Цех связи',
                division: 'Ремонтные работы',
                num:'num8',
                type:'type1'
            },
            {
                name: 'Слесарь-ремонтник 4 разряда',
                direction: 'Общество с ограниченной ответственностью "Белкалий-Мигао"',
                division: 'Ремонтные работы',
                num:'num1',
                type:'type1'
            }
            
        
        ],
    },
    computed:{
        filteredList: function(){
            var comp = this.name;
            var filterType= this.SelectedType;
            var  filterNum = this.SelectedNum;
            return this.Offers.filter(function (elem) {
                let filtered = true
                if(comp=='') {
                    return true;
                }
                if(filterType && filterType.length > 0){
                    filtered = elem.type == filterType
                    if(filtered){
                        if(filterNum && filterNum.length > 0){
                            filtered = elem.num == filterNum
                        }
                        
                        return filtered;
                    }
                    return filtered;
                  }
               
               
                else return elem.name.indexOf(comp) > -1;
                
               
                // if(comp=='') return [true, filtered];
                //  else return [elem.name.indexOf(comp) > -1, filtered];
               
            })
        }
        // computed_items: function () {
        //     let filterType= this.SelectedType,
        //         filterNum = this.SelectedNum
        //     return this.Offfers.filter(function(item){
        //       let filtered = true
        //       if(filterType && filterType.length > 0){
        //         filtered = item.type == filterType
        //       }
        //       if(filtered){
        //         if(filterNum && filterNum.length > 0){
        //           filtered = item.num == filterNum
        //         }
        //       }
        //       return filtered
        //     })
        //   }
        
}
})