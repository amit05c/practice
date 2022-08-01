export const loadData=(key)=>{
      let data= JSON.parse(localStorage.getItem(key))
      return data
}

export const saveData= (key,data)=>{
     localStorage.setItem(key,JSON.stringify(data))
}