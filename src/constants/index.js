import { makeAutoObservable } from "mobx"
import { Observer } from "mobx-react"
class todos {
    secondsPassed = 0
    isDisplay = false
    data
    render = true
    count = {total : 0, NumberUser: 0}
    constructor(){
        makeAutoObservable(this)
    }
    setRender(){
        this.render = !this.render
    }
    checkDisplay(){
        this.isDisplay = !this.isDisplay
    }
    increaseTimer(){
        this.secondsPassed += 1
    }
    setData(e){
        this.data = e
    }
    setCount(e){
        this.count = e 
    }
}
const todoStore = new todos()
export default todoStore;