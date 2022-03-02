
//S => State
//T => Type
// K => Key
// V => Value
// E => Element
function useState<S>() {
  let state: S;

  function getState() {
    return state;
  }
  function setState(newState: S) {
    state = newState;
  }
  return { getState, setState };
}
//aqui o retorno será number devido ao generics types(S)declarado no retorno da função
const stateS = useState<number>();
stateS.setState(45546)

//caso seja necessário utilizar a mesma função para retornar outro tipo podemos modificar na chamada da função
const stateT = useState<string>();
stateT.setState('foo')

//caso seja necessário utilizar a mesma função para retornar outro tipo podemos modificar na chamada da função
const stateG = useState<boolean>();
stateG.setState(true)
///////////////////////////////////////////////////////////////////////////
// para evitar a declaração de vários tipo podemos utilziar o extends
function useStates<S extends number | string  | boolean>() {
    let state: S;
  
    function getState() {
      return state;
    }
    function setState(newState: S) {
      state = newState;
    }
    return { getState, setState };
  }

  //aqui o retorno será number devido ao generics types(S)declarado no retorno da função
const statex = useStates<number>();
stateS.setState(45546)

//caso seja necessário utilizar a mesma função para retornar outro tipo podemos modificar na chamada da função
const statey = useStates<string>();
stateT.setState('foo')

//caso seja necessário utilizar a mesma função para retornar outro tipo podemos modificar na chamada da função
const statew = useStates<boolean>();
stateG.setState(true)

//Caso seja necessário setar um tipo default

function useStateDefault<S extends number | string  | boolean = boolean>() {
    let state: S;
  
    function getState() {
      return state;
    }
    function setState(newState: S) {
      state = newState;
    }
    return { getState, setState };
  }

  //aqui o retorno será number devido ao generics types(S)declarado no retorno da função
const stateA = useStateDefault();
stateA.setState(false)//deve ser boolean

//caso seja necessário utilizar a mesma função para retornar outro tipo podemos modificar na chamada da função
const stateB = useStateDefault();
stateB.setState(true)//deve ser boolean

//caso seja necessário utilizar a mesma função para retornar outro tipo podemos modificar na chamada da função
const stateC = useStateDefault();
stateC.setState(true)