let arr1 = ['teste1', 'teste2', 'teste3', 'teste4', 'teste5', 'teste6']

let arr2 = ['obj1', 'obj2', 'obj3', 'obj4']

arr2.length

function checkLength(num) {
  if(num.length > 5) {
    console.log('+ de 5')
  } else if(num.length < 5){
    console.log('- de 5')
  }
}

checkLength(arr1)
checkLength(arr2)