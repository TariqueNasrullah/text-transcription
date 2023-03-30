import React, { useState } from "react";
import Card from "../components/Card";
import "../../src/assets/style.css";
import Questions from "../utilities/questions";
import VideoPlayer from "../components/Video";

export default function Home() {
  return (
    <div className="container-sm mt_40">
      <div className="disclaimer">
        <p>
          হ্যালো/এই যে! আমাদের প্রোডাক্ট ট্রাই করার জন্য আপনাকে ধন্যবাদ! আশা
          করছি আপনি যখন আমাদের AI থেকে আপনার ইংরেজি বিষয়ে ফিডব্যাক পাবেন তখন
          আপনি অনেক কিছু শিখতে পারবেন। যেহেতু এটি একটি সেলফ-মেড প্রজেক্ট, আপনি
          কিছু bug-এর সম্মুখীন হতে পারেন 🐛৷ আমরা খুব শীঘ্রই সেগুল সলভ করে
          ফেলবো।
        </p>
        <VideoPlayer />
      </div>

      <h2 className="title">Explore it!</h2>
      <div className="flex">
        {Questions.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}
