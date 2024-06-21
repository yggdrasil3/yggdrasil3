import "./App.css";
import { Actions } from "./components/actions";
import { GlobalStatus } from "./components/globalStatus";
import { Nav } from "./components/nav";
import { ObrigatoriasSection } from "./components/obrigatoriasSection";
import { OptativasCienciasSection } from "./components/optativasCienciasSection";
import { OptativasEstatisticaSection } from "./components/optativasEstatisticasSection";
import { OptativasHumanidadesSection } from "./components/optativasHumanidadesSection";
import { OptativasSection } from "./components/optativasSection";
import { OptativasStatus } from "./components/optativasStatus";
import { ElectiveSubjectsProvider } from "./context/electiveContext";
import { FreeSubjectsProvider } from "./context/freeContext";
import { HumanidadesSubjectsProvider } from "./context/humanidadesContext";
import { MandatorySubjectsProvider } from "./context/mandatoryContext";
import { ScienceSubjectsProvider } from "./context/scienceContext";
import { StatisticsSubjectsProvider } from "./context/statisticsContext";

function App() {
  return (
    <HumanidadesSubjectsProvider>
      <ScienceSubjectsProvider>
        <StatisticsSubjectsProvider>
          <FreeSubjectsProvider>
            <ElectiveSubjectsProvider>
              <MandatorySubjectsProvider>
                <Nav />
                <div id="Dashboard">
                  <GlobalStatus />
                  <OptativasStatus />
                  <Actions />
                </div>
                <div id="Obrigatórias">
                  <ObrigatoriasSection />
                  <OptativasHumanidadesSection />
                  <OptativasCienciasSection />
                  <OptativasEstatisticaSection />
                </div>
                <div id="Optativas">
                  <OptativasSection />
                </div>
              </MandatorySubjectsProvider>
            </ElectiveSubjectsProvider>
          </FreeSubjectsProvider>
        </StatisticsSubjectsProvider>
      </ScienceSubjectsProvider>
    </HumanidadesSubjectsProvider>
  );
}

export default App;
