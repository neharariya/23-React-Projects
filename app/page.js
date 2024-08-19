"use client";

import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className="ml-10 mt-5">

      <h1 className="mb-6">React Projects</h1>

      <ol type ="a" className="leading-9 list-decimal text-black dark:text-white">
        <li>
          <Link href="/todolist">TodoList -  <span className="text-sm text-zinc-600">using usestate hook- can add and remove task</span></Link>
        </li>
        <li>
          <Link href="/authentication">Authentication  -  <span className="text-sm text-zinc-600">login/logout button</span></Link>
        </li>
        <li>
          <Link href="/fetch-two">Fetch Two  - <span className="text-sm text-zinc-600">fetching data from two APIs</span></Link>
        </li>
        <li>
          <Link href="/image-gallery">Image Gallery - <span className="text-sm text-zinc-600">Go to previous and next images using below "previous" and "next" buttons</span></Link>
        </li>
        <li>
          <Link href="/drag">Drag Me - <span className="text-sm text-zinc-600">made the "Drag Me" text dragable</span></Link>
        </li>
        <li>
          <Link href="/multiple-state">Multiple State Handling</Link>
        </li>
        <li>
          <Link href="/color-picker">Color Picker - <span className="text-sm text-zinc-600">click on the box and pick a color</span></Link>
        </li>
        <li>
          <Link href="/counter">Counter -  <span className="text-sm text-zinc-600">using useReducer hook</span></Link>
        </li>
        <li>
          <Link href="/file-uploader">File Uploader - <span className="text-sm text-zinc-600">choosen image/file will appear on screen</span></Link>
        </li>
        <li>
          <Link href="/pagination">Pagination - <span className="text-sm text-zinc-600">making the content visible on different pages instead of one</span></Link>
        </li>
        <li>
          <Link href="/search-item">Search Item - <span className="text-sm text-zinc-600">Find out the searched item from the list of items</span></Link>
        </li>
        <li>
          <Link href="/change-color">Change Color - <span className="text-sm text-zinc-600">background theme change</span> </Link>
        </li>
        <li>
          <Link href="/quotes">Quotes - <span className="text-sm text-zinc-600">Generating random quote on every re-render</span></Link>
        </li>
        <li>
          <Link href="/registration-form"> Registration Form - <span className="text-sm text-zinc-600">Registration form with login and register page</span></Link>
        </li>
        <li>
          <Link href="/weather-app"> Weather App - <span className="text-sm text-zinc-600">Weather conditions on the basis of current location</span></Link>
        </li>
        <li>
          <Link href="/responsive"> Responsive - <span className="text-sm text-zinc-600">Responsive menu bar-changes on the basis of width of the screen</span></Link>
        </li>
        <li>
          <Link href="/theme"> Theme - <span className="text-sm text-zinc-600">click on the checkbox to change the theme of the component</span></Link>
        </li>
        <li>
          <Link href="/shopping-cart"> Shopping Cart - <span className="text-sm text-zinc-600">Shopping cart with add to cart, remove and increasing and decreasing quantity functionality</span></Link>
        </li>
        <li>
          <Link href="/useReducer-todolist"> TodoList using UseReducer hook</Link>
        </li>
        <li>
          <Link href="/usereducer-pagination"> Pagination using useReducer hook</Link>
        </li>
        <li>
          <Link href="/translator"> Translator - <span className="text-sm text-zinc-600">Translate the text using "english" and "espanish" buttons</span></Link>
        </li>
        <li>
          <Link href="/timer"> Timer - <span className="text-sm text-zinc-600">start,stop and reset the timer using the corresponding buttons</span></Link>
        </li>
        <li>
          <Link href="/progress-bar"> ProgressBar - <span className="text-sm text-zinc-600">Progress will be visible in corresponding to the entered percentage</span></Link>
        </li>

      </ol>
    </div>
  );
};

export default Home;
