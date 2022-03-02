"use strict";
//S => State
//T => Type
// K => Key
// V => Value
// E => Element
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
//aqui o retorno será number devido ao generics types(S)declarado no retorno da função
var stateS = useState();
stateS.setState(45546);
//caso seja necessário utilizar a mesma função para retornar outro tipo podemos modificar na chamada da função
var stateT = useState();
stateT.setState('foo');
//caso seja necessário utilizar a mesma função para retornar outro tipo podemos modificar na chamada da função
var stateG = useState();
stateG.setState(true);
///////////////////////////////////////////////////////////////////////////
// para evitar a declaração de vários tipo podemos utilziar o extends
function useStates() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
//aqui o retorno será number devido ao generics types(S)declarado no retorno da função
var statex = useStates();
stateS.setState(45546);
//caso seja necessário utilizar a mesma função para retornar outro tipo podemos modificar na chamada da função
var statey = useStates();
stateT.setState('foo');
//caso seja necessário utilizar a mesma função para retornar outro tipo podemos modificar na chamada da função
var statew = useStates();
stateG.setState(true);
//Caso seja necessário setar um tipo default
function useStateDefault() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
//aqui o retorno será number devido ao generics types(S)declarado no retorno da função
var stateA = useStateDefault();
stateA.setState(false); //deve ser boolean
//caso seja necessário utilizar a mesma função para retornar outro tipo podemos modificar na chamada da função
var stateB = useStateDefault();
stateB.setState(true); //deve ser boolean
//caso seja necessário utilizar a mesma função para retornar outro tipo podemos modificar na chamada da função
var stateC = useStateDefault();
stateC.setState(true);
