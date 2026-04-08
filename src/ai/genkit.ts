import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Third-party AI provider bootstrap; treat this as integration code, not core app logic.
export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.0-flash',
});
