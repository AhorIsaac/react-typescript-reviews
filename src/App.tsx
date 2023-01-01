import React, { FC, ReactElement } from "react";
import Review from "./Review";

const App: FC = (): ReactElement => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Review</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default App;
