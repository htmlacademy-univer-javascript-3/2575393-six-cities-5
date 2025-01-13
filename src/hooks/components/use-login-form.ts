import {FormEvent, useRef} from 'react';
import {useAppDispatch} from '../services/redux.ts';
import {loginAction} from '../../store/api-actions.ts';


export function useLoginForm() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  return {handleSubmit, loginRef, passwordRef};
}
