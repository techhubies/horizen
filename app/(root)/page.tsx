import { HeaderBox } from "@/components/HeaderBox";
import { RightSidebar } from "@/components/RightSidebar";
import { TotalBlanceBox } from "@/components/TotalBlanceBox";
import React from "react";

function Home() {
  const loggedIn = {
    firstName: "Alireza",
    lastName: "Jsm",
    email: "contact@gmail.com",
  };

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
          <TotalBlanceBox
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={10000}
          />
        </header>
        recent transactions
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 503.5 }]}
      />
    </section>
  );
}

export default Home;
