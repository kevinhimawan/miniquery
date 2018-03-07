 class SweetSelector{
    static select(value){
        const result = document.querySelector(value)
        return result
    }

    static hide(){
        // let DOM = SweetSelector.select(value)
        return this.style.display = 'none'
    }

    static show (){
        // let DOM = SweetSelector.select(value)
        return this.style.display = 'block'
    }

    static addClass (value,newClass){
        let DOM = SweetSelector.select(value)
        return DOM.className = newClass
    }

    static removeClass (value,removedClass){
        let DOM = SweetSelector.select(value)
        return DOM.classList.remove(removedClass);
    }

    static trigger(value,event){
        if(event === 'click'){
            document.querySelector(value).addEventListener(event,()=>{
                console.log('Awesome')
            })
        }
    }

    static ajax(object){
        var request = new XMLHttpRequest();
        request.open(object.type, object.url, true);
        request.addEventListener('load',(object.success))
        request.addEventListener('error',(object.fail))
        request.send();
    }

    static changeAll(){
        let DOM = document.querySelectorAll('div','a')
        console.log(DOM)
    }
   
}

// const $ = SweetSelector.select()

function $(value){
    const result = document.querySelector(value)
    return result
}