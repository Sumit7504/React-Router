import { Suspense } from "react";
import { defer, Await, useLoaderData } from "react-router-dom";

// --- 1. The Loader ---
export function weatherLoader() {
  // weatherloader - Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components
  // We do NOT use 'await' here. We want the raw promise.
  const weatherPromise = fetch("/api/weather").then((res) => res.json());

  // We 'defer' the promise so the page can load instantly
  return defer({ weather: weatherPromise });
}

// --- 2. The Page Component ---
export function WeatherPage() {
  // We grab the deferred promise
  const dataPromise = useLoaderData();

  return (
    <div>
      <h1>Current Weather</h1>

      {/* 3. Suspense shows the fallback UI while waiting */}
      <Suspense fallback={<h2>Loading weather... please wait!</h2>}>
        {/* 4. Await handles the delayed promise */}
        <Await resolve={dataPromise.weather}>
          {/* 5. Once the data arrives, it runs this function to show it */}
          {(loadedWeather) => (
            <div>
              <p>Temperature: {loadedWeather.temp}</p>
              <p>Condition: {loadedWeather.condition}</p>
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
