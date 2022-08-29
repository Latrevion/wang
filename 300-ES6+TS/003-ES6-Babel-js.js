class MyMath {
    constructor(){
      console.log('here is constructor!')
    }

    add(a,b){
      return a+b
    }
  }

  let m = new MyMath()
  console.log( m.add(1,2))