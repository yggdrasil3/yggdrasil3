export const Login = () => {
  return (
    <div
      style={{
        padding: "100px 1.5rem",
        width: "screen",
      }}
      id="login"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div>
          <h2>Login</h2>
          <form>
            <label>Username:</label>
            <input />
            <br />
            <label>Password:</label>
            <input type="password" />
          </form>
        </div>
        <div>
          <h2>Cadastro</h2>
          <form>
            <label>Username:</label>
            <input />
            <br />
            <label>Senha:</label>
            <input type="password" />
            <br />
            <label>Confirme a senha:</label>
            <input type="password" />
          </form>
        </div>
      </div>
    </div>
  );
};
