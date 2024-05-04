import { HeaderBox } from "@/components/HeaderBox";
import { TotalBlanceBox } from "@/components/TotalBlanceBox";
import React from "react";

function Home() {
  const loggedIn = { firstName: "Alireza" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
        </header>
        <TotalBlanceBox
          accounts={[]}
          totalBanks={2}
          totalCurrentBalance={10000}
        />
      </div>
    </section>
  );
}

export default Home;
