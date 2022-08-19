import { useState, useEffect, useRef } from 'react';
const Baby = (props) => {
  /* 
    把state變成useState 
    useState會觸發 re-render
  */
 
  const [isGetData, setGetData] = useState(false);
  const [Mom, setMom] = useState("");
  const [isRightDad, setRightDad] = useState(false);
  const previousName = useRef('');

  /*
    useRef 並不會觸發 re-render
    manage focus, text selection, or media playback 或是不牽涉畫面顯示時 
    類似 Vue computed
  */
  /* 把class 的 member function改成function中的function */
  const ajaxSimulator = () => {
    setTimeout(() => {
      setGetData(true);
      setMom("小美");
    }, 3000)
  }
  const checkDad = () => {
    if (props.dad === "Chang")
      setRightDad(true)
    else
      setRightDad(false)

    previousName.current = props.dad
  }

  useEffect(() => {
    /* 下面是 componentDidMount */
    //當props.dad更新時觸發，類似vue3 watchEffect
    ajaxSimulator();
    document.getElementById("talk").append('爸!')
    /* 上面是 componentDidMount */
    return (() => {
      /* 下面是 componentWillUnmount */
      // 當component消滅時，清空talk的資料
      document.getElementById("talk").innerHTML = "";

      /* 上面是 componentWillUnmount */
    })
  }, []);
  useEffect(() => {
    /* 下面是 componentDidMount和componentDidUpdate */
    //當props.dad更新時觸發，類似vue3 watch
    checkDad();

    /* 上面是 componentDidMount和componentDidUpdate */
  }, [props.dad]); /* 加入監控的props.dad */ 
  if (isRightDad === false)
    return (
      
      <div><button onClick={props.changeDad}>換爸爸!</button>他的媽媽，是誰，干你X事</div>
    );
  else if (isGetData === false)
    return (
      <div id="msg">讀取中</div>
    );
  else
    return (
      <div id="msg"><button onClick={props.changeDad}>換爸爸!</button>他的媽媽是{Mom}</div>
    );
}
export default Baby;
