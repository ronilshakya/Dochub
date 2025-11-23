import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-12 py-16">
      <div className="text-center">
        <h2 className="text-4xl text-red-600 font-bold">
          <CountUp
            start={0}
            end={50000}
            duration={4}
            separator=","
            enableScrollSpy={true}
            scrollSpyOnce={true}
          />
        </h2>
        <p className="text-gray-700 mt-2">Applications Processed</p>
      </div>
    </section>
  );
};

export default Stats;
