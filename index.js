//Test inputs
const testSoup = [
    "S O L",
    "U N O",
    "N U T"
  ];
  const testWords = [
    "SUN",
    "SOL",
    "LOT",
    "ONU",
    "RAY"
  ];
  //getAnswer function return the array of characters of the word and its position the matrix
  function getAnswer(row,col,word,soup){
    let answer=[];
    let rowAnswer = false;
    if(col==-1){
      rowAnswer=true;
    }
    let iterableCol;
    if(rowAnswer){
      col=soup[row].join("").indexOf(word);
    }
    [...word].forEach((char,index)=>{
      if(rowAnswer){
        answer.push(char+" - ["+row+", "+Number(col+index)+"]");
      }else{
        answer.push(char+" - ["+Number(row+index)+", "+col+"]");
      }
    });
    return answer;
  }
  //checkWordInRow and checkWordInCol function run a check if the word is in the row "row" or column "col" and return true or false if it's in or it isn't
  function checkWordInRow(row,word,soup){
    if(soup[row].join("").includes(word)){
      return true;
    }
    return false;
  }
  function checkWordInCol(row,col,word,soup){
    const colWord = soup.map(row=>row[col]).join("");
    if(colWord.includes(word)){
      return true;
    }
    return false;
  }
  
  //findWord function run for every word to search in the soup and logs in the console the content of its search result
  function findWord(soup,word){
    console.log("Searching "+word);
    let answer = '"'+word+'" Not found';
    for(let row=0;row<soup.length;row++){
      //Check if row contains the word exactly with string.prototype methods
      if(checkWordInRow(row,word,soup)){
        answer=getAnswer(row,-1,word,soup);
        break;
      }
      for(let col=0;col<soup[0].length;col++){
        //Check if every column has the word from the current position at the soup matrix
        if(word.startsWith(soup[row][col])){
          if(checkWordInCol(row,col,word,soup)){
            answer = getAnswer(row,col,word,soup);
            break;
          }
        }
      }
    }
    if(typeof(answer)=="string"){
      console.log(answer);
    }else{
      answer.forEach(charAnswer=>{
        console.log(charAnswer);
      })
    }
  }
  
  //solution function is the main function where a user or tester call with the inputSoup and the search
  function solution(soup, wordList){
    //transform inputSoup in a characters matrix
    soup = soup.map(row=>row.split(" "));
    //for N words, search in soup
    wordList.forEach(word=>{
      findWord(soup,word);
    });  
  }
  
  //test call
  solution(testSoup, testWords);