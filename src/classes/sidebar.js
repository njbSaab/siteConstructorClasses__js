import { block } from "../utils"
import { TextBlock, TitleBlock } from "./block"

export class Sidebar {
   constructor(selector, updateCallBack){
      this.$el = document.querySelector(selector)
      this.update = updateCallBack
      this.init()
   }
   init(){
      this.$el.insertAdjacentHTML('afterbegin', this.template)
      this.$el.addEventListener('submit', this.add.bind(this))
   }

   get template(){
      return [
         block('text'),
         block('title')
      ].join('')
   }
   add(event){
      event.preventDefault()

      const type = event.target.name
      const value = event.target.value.value
      const styles = event.target.styles.value

      const newBlock = type === 'text' ? 
      TextBlock(value, {styles})
      :
      TitleBlock(value, {styles})


      this.update(newBlock)

      event.target.values.value =''
      event.target.styles.value =''
   }
}

