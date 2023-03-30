import { useContext, useEffect, useState } from "react";
import React from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import axios from "axios";
import Result from "../components/Result";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { MyContext } from "../MyContext";

function Recorder() {
  const [result, setResult] = useState({});
  const [recording, setRecording] = useState({});
  const [onSubmitting, setOnSubmitting] = useState(false);
  const [error, setError] = useState("");

  const { question } = useContext(MyContext);

  const [onRecording, setOnRecording] = useState(false);

  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
  } = useAudioRecorder();

  const recorderControls = useAudioRecorder();
  const addAudioElement = async (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    // audio.controls = true;
    // document.body.appendChild(audio);

    setRecording(blob);
    setOnRecording(true);
  };

  // Reset handler
  const handleReset = () => {
    setRecording({});
    setOnRecording(false);
  };

  useEffect(() => {
    setRecording({});
  }, []);

  const sendRecord = async () => {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
      respnseType: "blob",
      onDownloadProgress: (progressEvent) => {
        console.log(progressEvent.loaded, progressEvent.total);
      },
    };

    setOnSubmitting(true);
    await axios
      .post(
        "https://rbarohit.pythonanywhere.com/evaluate",
        {
          file: recording,
          question,
        },
        config
      )
      .then((res) => {
        if (res.data.error) {
          setError(res.data.error);
        } else {
          setResult(res.data);
          setError("");
        }
      })
      .catch((err) => {})
      .finally(() => {
        setRecording({});
        setOnRecording(false);
        setOnSubmitting(false);
      });
  };

  return (
    <div className="container mt_40">
      <div
        style={{ width: "84%", margin: "auto" }}
        className="disclaimer-recording"
      >
        <p>
          আমাদের AI দ্বারা প্রসেস এবং স্কোর করার জন্য আপনার উত্তরগুলো রেকর্ড করা
          দরকার। যদিও, আমরা এই অডিও রেকর্ডিংগুলো আমাদের সার্ভারে কোথাও সংরক্ষণ
          করি না 🚫
        </p>
      </div>

      <div className="recorder">
        <Link className="return" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </Link>
        <div className="player">
          <h3 style={{ textAlign: "left", marginBottom: "20px" }}>
            {" "}
            {question}{" "}
          </h3>
          <AudioRecorder
            onRecordingComplete={(blob) => addAudioElement(blob)}
            recorderControls={recorderControls}
          />

          {!onRecording && (
            <div className="show_result">
              {" "}
              {recorderControls.isRecording ? (
                <button onClick={recorderControls.stopRecording}>
                  Stop recording
                </button>
              ) : (
                <button onClick={recorderControls.startRecording}>
                  Start recording
                </button>
              )}{" "}
            </div>
          )}

          {onRecording && (
            <div>
              <h4 style={{ marginTop: "20px" }} className="submit-text">
                Submit your recording
              </h4>
              <button className="submit" onClick={sendRecord}>
                Submit
              </button>
              <button className="reset" onClick={handleReset}>
                Reset
              </button>
            </div>
          )}
        </div>
        <div>
          {onSubmitting ? (
            <h3>
              <span style={{ marginBottom: "20px", display: "block" }}>
                Please wait.. Magic takes time 😉
              </span>
              <div className="spinner">
                <Oval
                  height={60}
                  width={60}
                  color="#cbd5e1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#334155"
                  strokeWidth={3}
                  strokeWidthSecondary={3}
                />
              </div>
            </h3>
          ) : !error ? (
            <div className="result">{<Result data={result} />}</div>
          ) : (
            <h3 style={{ textAlign: "left" }}>
              {error === "Invalid score_text format"
                ? "Invalid score_text format. Please try again"
                : error}
            </h3>
          )}{" "}
        </div>
      </div>
    </div>
  );
}

export default Recorder;
