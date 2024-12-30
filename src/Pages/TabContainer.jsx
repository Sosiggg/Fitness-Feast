import React, { useEffect, useState } from 'react';

const TabContainer = () => {
  useEffect(() => {
    openTab('vegetarian');
  }, []);

  const openTab = (tabName) => {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) => {
      if (tab.id === tabName + '-tab') {
        tab.classList.add('active-tab');
        tab.querySelector('.triangle').classList.remove('hide-triangle');
      } else {
        tab.classList.remove('active-tab');
        tab.querySelector('.triangle').classList.add('hide-triangle');
      }
    });

    const contents = document.querySelectorAll('.tab-content');
    contents.forEach((content) => {
      if (content.id === tabName) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  };

  return (
    <div className="tab-container">
      <div
        id="vegetarian-tab"
        className="tab"
        onClick={() => openTab('vegetarian')}
      >
        VEGETARIAN
        <div className="triangle"></div>
        <div className="triangle hide-triangle"></div>
      </div>
      <div
        id="quick-easy-tab"
        className="tab"
        onClick={() => openTab('quick-easy')}
      >
        QUICK & EASY
        <div className="triangle hide-triangle"></div>
        <div className="triangle"></div>
      </div>
      <div
        id="pinterest-tab"
        className="tab"
        onClick={() => openTab('pinterest')}
      >
        POPULAR ON PINTEREST
        <div className="triangle hide-triangle"></div>
        <div className="triangle"></div>
      </div>
    </div>
  );
};

export default TabContainer;
