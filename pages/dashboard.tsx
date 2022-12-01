import { FormCard, NavBar } from "@components/DashBoard";

const Dashboard = () => {
  return (
    <div className="w-full h-full text-white text-2xl dashboard-layout">
      <NavBar />
      <main className="flex">
        {/* <section>thinking of something here lol</section> */}
        <section className="shrink-0 grow">
          <button
            type="button"
            className="block dui-btn dui-btn-primary capitalize mr-auto"
          >
            Create Form
          </button>
          <div className="flex justify-start my-6">
            <FormCard />
            <FormCard />
            <FormCard />
            <FormCard />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
