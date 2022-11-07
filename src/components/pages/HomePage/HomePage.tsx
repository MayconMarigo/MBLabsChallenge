import HomeTemplate from "../../templates/HomeTemplate/HomeTemplate";

const HomePage = () => {
  return (
    <HomeTemplate
      OrganizerContent={[
        {
          title: "Organizador TOP 1",
          city: "Londrina",
          UF: "PR",
        },
        {
          title: "Esse é bom também",
          city: "Cambé",
          UF: "PR",
        },
      ]}
      EventsContent={[
        {
          title: "Eventão hein!!",
          date: "28 de novembro",
          city: "Londrina",
          UF: "PR",
        },
        {
          title: "Outro Eventão hein",
          date: "12 de dezembro",
          city: "Maringá",
          UF: "PR",
        },
      ]}
      AdContent={[{ text: "teste" }, { text: "teste2" }]}
    />
  );
};
export default HomePage;
