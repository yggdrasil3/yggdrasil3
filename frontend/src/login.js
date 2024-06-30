import { useElectiveSubjects } from "./context/electiveContext";
import { useHumanidadesSubjects } from "./context/humanidadesContext";
import { useMandatorySubjects } from "./context/mandatoryContext";
import { useScienceSubjects } from "./context/scienceContext";
import { useStatisticsSubjects } from "./context/statisticsContext";
import { useUser } from "./context/userContext";

export const Login = () => {
  const { user, setUser } = useUser();

  const { getMandatorySubjects, setMandatorySubjects } = useMandatorySubjects();
  const { getElectiveSubjects, setElectiveSubjects } = useElectiveSubjects();

  const { getHumanidadesSubjects, setHumanidadesSubjects } =
    useHumanidadesSubjects();
  const { getScienceSubjects, setScienceSubjects } = useScienceSubjects();
  const { getStatisticsSubjects, setStatisticsSubjects } =
    useStatisticsSubjects();

  const handleLogin = (event) => {
    event.preventDefault();

    setUser({
      name: "Jonathas",
      mandatorySubjects: ["MAC0101"],
      electiveSubjects: ["MAC0328"],
      humanidadeSubjects: [],
      scienceSubjects: [],
      statisticsSubjects: [],
    });

    user.mandatorySubjects.forEach((code) => setMandatorySubjects(code));
    user.electiveSubjects.forEach((code) => setElectiveSubjects(code));
    user.humanidadeSubjects.forEach((code) => setHumanidadesSubjects(code));
    user.scienceSubjects.forEach((code) => setScienceSubjects(code));
    user.statisticsSubjects.forEach((code) => setStatisticsSubjects(code));
  };

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
            <button onClick={(e) => handleLogin(e)}>Enviar</button>
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
