import {useLoginForm} from '../../hooks/components/use-login-form.ts';

function LoginForm(): JSX.Element {
  const {handleSubmit, loginRef, passwordRef} = useLoginForm();

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form className="login__form form" action="" onSubmit={handleSubmit}>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            ref={loginRef}
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </div>
        <button
          className="login__submit form__submit button"
          type="submit"
        >Sign in
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
