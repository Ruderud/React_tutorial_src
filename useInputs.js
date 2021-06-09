import { useState, useReducer, useCallback } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                    ...state,
                    [action.name]: action.value
                    };
        case 'RESET_INPUT':
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = '';
                return acc;
            }, {});
        default:
            return state;
    }
}

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);

    const onChange = useCallback(e => {
      const { name, value } = e.target;
      setForm(form => ({ ...form, [name]: value }));
    }, []);
    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    return [form, onChange, reset];
  };



// function useInputs(initialForm) {
//   const [form, setForm] = useState(initialForm);   //useState사용-> form을 처음 선언할때의 처음값을 initalState을 가져옴
//   const onChange = useCallback(e => {
//       const { name, value} = e.target;
//       setForm(form => ({ ...form, [name]: value}));
//   }, []);
//   const reset = useCallback(() => setForm(initialForm), [initialForm]);

//   return [form, onChange, reset];
// };

export default useInputs;
