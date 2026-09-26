# PitchIQ

A lightweight mobile-first PWA focused on football Over 1.5 and Over 2.5 goal predictions.

## Features

- Daily football fixture dashboard
- Probabilistic Over 1.5 and Over 2.5 analysis
- Match-level decision factors including:
  - team form over the last 12 months
  - recent xG and xGA
  - availability and injuries
  - rest and travel
  - venue and weather
  - set-piece threat
  - historical head-to-head trends
- ACCA builder with highest return and strongest probability selections
- PWA offline support via service worker

## Run locally

You can serve the app with any static web server.

Examples:

- `python -m http.server 8000`
- `npx serve .`

Then open:

- `http://localhost:8000`

## Production note

This build uses synthetic/demo data for a functional demo. To go live, connect a real football data provider and a prediction API or data layer.
