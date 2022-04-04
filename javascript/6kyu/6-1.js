function amountOfPages(summary){
  let hoge = ""
  
  for (let i = 1; i <= summary; i++) {
    hoge = hoge + i.toString()
    if (hoge.length === summary) {
      return i
    }
  }
}
