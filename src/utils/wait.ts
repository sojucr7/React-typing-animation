export const wait=async (interval:number): Promise<void>=>{
    return new Promise((resolve)=>{
         setTimeout(()=>{
             resolve()
         },interval*1000)
    })
  }