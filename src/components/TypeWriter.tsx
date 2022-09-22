import { wait } from "../utils/wait"
import { configs, config} from "../types/config"
import { useRef,useEffect,useReducer, useState, useCallback } from "react"

const TYPING_INTERVAL = .09

function TypeWriter(props: configs) {  

  const config = props.config

  const textCharCount=useRef(0)

  const [text,setText]=useState('')

  const appendLetter = async (word: string): Promise<void> => {
    return new Promise(async (resolve) => {
      for (const w of word) {
        await wait(TYPING_INTERVAL)
        textCharCount.current+=1
        setText((prevState)=>{
          return prevState+w
        })
      }
      resolve()
    })
  }

  const deleteChars=async (numberOfCharacter:number): Promise<void>=> {
    return new Promise(async (resolve) => {
      for (let i=numberOfCharacter-1;i>=0;i--) {
        await wait(TYPING_INTERVAL)
        textCharCount.current-=1
        setText((prevState)=>{
          return prevState.slice(0,-1)
        })
      }
      resolve()
    })
  }

  const deleteAll=async (): Promise<void>=> {
    return new Promise(async (resolve) => {
      for (let i=textCharCount.current-1;i>=0;i--) {
        await wait(TYPING_INTERVAL)
        textCharCount.current-=1
        setText((prevState)=>{
          return prevState.slice(0,-1)
        })
      }
      resolve()
    })
  }

  const typingFunction = async (config: config[]) => {
    let conf = config.shift()  
    while (conf) {
      if(conf.word){
        await appendLetter(conf.word)
      }
      if(conf.pauseFor){
        await wait(conf.pauseFor)
      }
      if(conf.deleteChars){
        await deleteChars(conf.deleteChars)
      }
      if(conf.deleteAll){
        await deleteAll()
      }
      config.push(conf)     
      conf = config.shift()
    }
  }

  useEffect(() => {
    const configCpy: config[] = [...config]
    typingFunction(configCpy)
  }, [props.config])

  return <div style={{whiteSpace: "pre-wrap"}}><code>{text}</code></div>
}

export default TypeWriter
