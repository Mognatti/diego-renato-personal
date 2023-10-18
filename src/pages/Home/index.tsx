import AboutMe from "./Components/AboutMe";
import Main from "./Components/Main";
import Plans from "./Components/Plans";
import SpecialPlans from "./Components/SpecialPlans";
import SpreadSheet from "./Components/Spreadsheet";

export default function Home() {
  return (
    <>
      <Main />
      <AboutMe />
      <SpreadSheet />
      <Plans />
      <SpecialPlans />
    </>
  );
}
