<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Nexus Intelligence - WarmUpChallenge

This is a React application powered by the Gemini AI API and Supabase for data management.

View your app in AI Studio: https://ai.studio/apps/2c266ca3-4f14-4176-beaf-0968a43f36f7

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Environment Variables

This project requires the following environment variables:

- `VITE_GEMINI_API_KEY` - Your Gemini API key from [ai.google.dev](https://ai.google.dev/)
- `VITE_SUPABASE_URL` - Your Supabase project URL (e.g., `https://your-project.supabase.co`)
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file by copying from the template:
   ```bash
   cp .env.local.example .env.local
   ```

3. Fill in your environment variables in `.env.local`:
   ```
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Docker Deployment

To build the Docker image:

```bash
docker build -t nexus-app .
```

To run locally with environment variables (at runtime):

```bash
docker run -p 8080:8080 \
  -e VITE_GEMINI_API_KEY=your_key \
  -e VITE_SUPABASE_URL=your_url \
  -e VITE_SUPABASE_ANON_KEY=your_anon_key \
  nexus-app
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

## Cloud Deployment (Google Cloud Run)

### Via Google Cloud Console

1. Push the Docker image to Container Registry:
   ```bash
   docker tag nexus-app gcr.io/YOUR_PROJECT_ID/nexus-app
   docker push gcr.io/YOUR_PROJECT_ID/nexus-app
   ```

2. Deploy to Cloud Run with environment variables:
   ```bash
   gcloud run deploy nexus-app \
     --image gcr.io/YOUR_PROJECT_ID/nexus-app \
     --platform managed \
     --region us-central1 \
     --port 8080 \
     --allow-unauthenticated \
     --set-env-vars VITE_GEMINI_API_KEY=your_key,VITE_SUPABASE_URL=your_url,VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

### Via Cloud Build (Automated CI/CD)

Configure your Cloud Build trigger with the following substitution variables:
- `_VITE_GEMINI_API_KEY`: Your Gemini API key
- `_VITE_SUPABASE_URL`: Your Supabase project URL
- `_VITE_SUPABASE_ANON_KEY`: Your Supabase anon key

When you push to the repository, Cloud Build will:
1. Build the Docker image
2. Push it to Container Registry
3. Deploy to Cloud Run with the environment variables injected at runtime

Or manually trigger a build with substitutions:
```bash
gcloud builds submit \
  --config=cloudbuild.yaml \
  --substitutions=_VITE_GEMINI_API_KEY=your_key,_VITE_SUPABASE_URL=your_url,_VITE_SUPABASE_ANON_KEY=your_anon_key
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run TypeScript type checking
- `npm run clean` - Clean the dist folder

