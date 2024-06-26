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
          <h2>Entrar</h2>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label>Username:</label>
            <input />
            <label>Password:</label>
            <input type="password" />
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div>
          <h2>Cadastro</h2>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label>Username:</label>
            <input />
            <label>Senha:</label>
            <input type="password" />
            <label>Confirme a senha:</label>
            <input type="password" />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};
