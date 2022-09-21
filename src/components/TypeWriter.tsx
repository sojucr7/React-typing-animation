import { wait } from "../utils/wait";
import { useEffect, useState, useCallback } from "react";
import { configs, config } from "../types/config";

const TYPING_INTERVAL = 0.05;

function TypeWriter(props: configs) {
  const config = props.config;

  const [typeString, setTypeString] = useState("");

  const appendLetter = async (word: string): Promise<void> => {
    return new Promise(async (resolve) => {
      for (const w of word) {
        await wait(TYPING_INTERVAL);
        setTypeString((previousState) => {
          return previousState + w;
        });
      }
      resolve();
    });
  };

  const typingFunction = useCallback(async (config: config[]) => {
    let word = config.shift()?.word;    
    while (word) {
      await appendLetter(word);
      word = config.shift()?.word;
    }
  }, []);

  useEffect(() => {
    const configCpy: config[] = [...config];
    typingFunction(configCpy);
  }, [props.config]);

  return <div style={{whiteSpace: "pre-wrap"}}>{typeString}</div>;
}

export default TypeWriter;
