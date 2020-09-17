import React from "react";
import "./style.css"

const Home = () => {
  return (
    <div>
      <section className="wave-section">
        <div className="wave" style={{height: '150px', overflow: 'hidden'}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: 'white'}}></path></svg></div>
        <div className="postWave">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eos aperiam ducimus deleniti nostrum aliquam dolore iure ratione quaerat ipsa culpa cum vel non, eveniet quisquam sunt? Fugit, odio reprehenderit.</div>
      </section>
    </div>
  );
};

export default Home;
